/* =====================================================
   TECH MONSTER - Auto Updater UI
   Electron: electron-updater through preload IPC.
   Web/PWA: service worker waiting prompt.
   Android (Capacitor): version.json check + APK download.
   ===================================================== */
window.Updater = (function () {
    let currentVersion = "";
    let currentBuild = 0;
    let updateInfo = null;
    let waitingRegistration = null;
    let checkTimer = null;
    let modal = null;

    const DISMISS_KEY = "tm_updateDismissed";

    const $ = (id) => document.getElementById(id);

    function isNative() {
        return !!(window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform());
    }

    function isElectron() {
        return !!window.electronAPI;
    }

    function config() {
        return window.TM_CONFIG || {};
    }

    function init() {
        if (isElectron()) {
            bindElectronEvents();
            fetchElectronVersion();
            return;
        }
        bindWebEvents();
        fetchClientVersion();
        if (navigator.onLine) {
            checkClientUpdates(false);
            scheduleChecks();
        }
    }

    function bindElectronEvents() {
        const btn = $("checkUpdateBtn");
        if (btn) btn.addEventListener("click", () => checkForUpdates(true));

        window.electronAPI.onUpdateStatus((status) => {
            if (status === "checking") setCheckingUI(true);
        });
        window.electronAPI.onUpdateAvailable((info) => {
            updateInfo = info;
            showUpdateAvailable(info);
        });
        window.electronAPI.onUpdateNotAvailable(() => hideUpdateUI());
        window.electronAPI.onUpdateError((msg) => {
            hideUpdateUI();
            showToast("Update check failed: " + msg, "error");
        });
        window.electronAPI.onUpdateProgress((p) => setDownloadProgress(p));
        window.electronAPI.onUpdateDownloaded((info) => {
            updateInfo = info;
            showUpdateReadyToInstall(info);
        });
    }

    function bindWebEvents() {
        window.addEventListener("tm:update-ready", (event) => {
            waitingRegistration = event.detail && event.detail.registration ? event.detail.registration : null;
            if (navigator.onLine) showWebUpdateBanner();
        });

        window.addEventListener("online", () => {
            checkClientUpdates(false);
            scheduleChecks();
        });
        window.addEventListener("offline", () => clearInterval(checkTimer));

        setInterval(() => {
            if (navigator.onLine && !isNative()) checkServiceWorker();
        }, 60 * 1000);
    }

    function scheduleChecks() {
        clearInterval(checkTimer);
        const every = Number(config().updateCheckIntervalMs || 6 * 60 * 60 * 1000);
        checkTimer = setInterval(() => {
            if (navigator.onLine) checkClientUpdates(false);
        }, every);
    }

    async function fetchElectronVersion() {
        try {
            const v = await window.electronAPI.getAppVersion();
            currentVersion = v || "";
            setVersionLabel();
        } catch (_) {}
    }

    async function fetchClientVersion() {
        if (isNative()) {
            try {
                const App = window.Capacitor && window.Capacitor.Plugins ? window.Capacitor.Plugins.App : null;
                if (App && App.getInfo) {
                    const info = await App.getInfo();
                    currentVersion = info.version || "";
                    currentBuild = Number(info.build || 0);
                }
            } catch (_) {}
        }
        if (!currentVersion) currentVersion = String(config().clientVersion || "");
        if (!currentBuild) currentBuild = Number(config().clientBuild || 0);
        setVersionLabel();
    }

    function setVersionLabel() {
        const text = currentVersion ? `v${currentVersion}` : "";
        ["appVersion", "settingsAppVersion"].forEach((id) => {
            const el = $(id);
            if (el) el.textContent = text;
        });
    }

    function parseVersion(value) {
        return String(value || "")
            .split(/[.+-]/)
            .map((part) => parseInt(part, 10))
            .map((part) => (Number.isFinite(part) ? part : 0));
    }

    function compareVersions(a, b) {
        const left = parseVersion(a);
        const right = parseVersion(b);
        const length = Math.max(left.length, right.length);
        for (let i = 0; i < length; i++) {
            const l = left[i] || 0;
            const r = right[i] || 0;
            if (l > r) return 1;
            if (l < r) return -1;
        }
        return 0;
    }

    async function fetchManifest() {
        const base = String(config().cloudBase || "").replace(/\/+$/, "");
        const path = config().updateManifestPath || "/version.json";
        const url = `${base}${path}${path.includes("?") ? "&" : "?"}t=${Date.now()}`;
        const response = await fetch(url, { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
    }

    async function checkClientUpdates(manual) {
        if (isElectron()) return checkForUpdates(manual);
        if (!navigator.onLine) {
            if (manual) showToast("You are offline. Connect to check for updates.", "warning");
            return;
        }
        if (!isNative()) checkServiceWorker();

        setCheckingUI(true);
        try {
            const manifest = await fetchManifest();
            if (!currentVersion) await fetchClientVersion();
            const newerVersion = compareVersions(manifest.version, currentVersion) > 0;
            const androidVersionCode = Number((manifest.android && manifest.android.versionCode) || manifest.build || 0);
            const newerBuild = isNative() && androidVersionCode > Number(currentBuild || 0) && compareVersions(manifest.version, currentVersion) >= 0;
            const dismissed = localStorage.getItem(DISMISS_KEY);
            const shouldPrompt = newerVersion || newerBuild;

            if (shouldPrompt && (manual || dismissed !== String(manifest.version))) {
                updateInfo = manifest;
                showClientUpdateModal(manifest, { newerVersion, newerBuild });
                setCheckingUI(false);
                return;
            }
            if (manual) showToast(newerVersion || newerBuild ? "Update available." : "You are on the latest version.", "info");
        } catch (err) {
            if (manual) showToast("Could not check for updates: " + (err.message || err), "error");
        } finally {
            setCheckingUI(false);
        }
    }

    function checkServiceWorker() {
        if (!("serviceWorker" in navigator)) return;
        navigator.serviceWorker.getRegistration().then((reg) => {
            if (!reg) return;
            if (reg.waiting) {
                waitingRegistration = reg;
                showWebUpdateBanner();
                return;
            }
            try { reg.update(); } catch (_) {}
        }).catch(() => {});
    }

    function updateInfoFor(manifest) {
        return {
            version: manifest.version || "unknown",
            notes: manifest.notes || "",
            url: (manifest.android && manifest.android.apkUrl) || config().androidDownloadUrl || "",
            webUrl: (manifest.web && manifest.web.url) || config().cloudBase || ""
        };
    }

    function showClientUpdateModal(manifest, flags) {
        const info = updateInfoFor(manifest);
        const kind = isNative() ? "Android app" : "app";
        const body = document.createElement("div");
        body.className = "modal fade";
        body.tabIndex = -1;
        body.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update available</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-2">A new ${kind} version <strong>v${escapeHtml(info.version)}</strong> is available. You are on <strong>v${escapeHtml(currentVersion || "unknown")}</strong>.</p>
                        ${info.notes ? `<p class="small text-muted mb-2">${escapeHtml(info.notes)}</p>` : ""}
                        <p class="small text-muted mb-0">${isNative() ? "Download the new APK, then open it to install over this version. Your progress stays on this device." : "Reload to load the latest version."}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Later</button>
                        <button type="button" class="btn btn-primary" data-tm-update-now>${isNative() ? "Download update" : "Update now"}</button>
                    </div>
                </div>
            </div>`;
        document.body.appendChild(body);
        if (window.bootstrap && bootstrap.Modal) {
            modal = new bootstrap.Modal(body, { backdrop: "static" });
            modal.show();
        }
        body.querySelector("[data-tm-update-now]").addEventListener("click", () => {
            if (isNative()) {
                const url = info.url || config().androidDownloadUrl;
                if (!url) {
                    showToast("No download link is configured yet.", "error");
                    return;
                }
                body.querySelector("[data-tm-update-now]").disabled = true;
                openExternal(url);
            } else {
                activateWaitingWorkerOrReload(info.webUrl);
            }
        });
        body.addEventListener("hidden.bs.modal", () => {
            localStorage.setItem(DISMISS_KEY, String(info.version));
            body.remove();
            modal = null;
        });
    }

    function showWebUpdateBanner() {
        const container = $("updateNotifier");
        if (!container) return;
        container.innerHTML = `
            <div class="update-alert alert alert-warning border-warning d-flex align-items-center justify-content-between gap-2" role="alert">
                <div><strong>New version ready.</strong> Reload to get the latest Tech Monster.</div>
                <button class="btn btn-sm btn-primary" type="button" data-tm-reload>Update now</button>
            </div>`;
        container.classList.remove("d-none");
        const btn = container.querySelector("[data-tm-reload]");
        if (btn) btn.addEventListener("click", () => activateWaitingWorkerOrReload());
    }

    async function activateWaitingWorkerOrReload(webUrl) {
        if (isNative()) {
            if (webUrl) openExternal(webUrl);
            return;
        }
        const reg = waitingRegistration || await navigator.serviceWorker.getRegistration().catch(() => null);
        if (reg && reg.waiting) {
            let reloaded = false;
            navigator.serviceWorker.addEventListener("controllerchange", () => {
                if (reloaded) return;
                reloaded = true;
                window.location.reload();
            }, { once: true });
            reg.waiting.postMessage({ type: "SKIP_WAITING" });
            setTimeout(() => { if (!reloaded) window.location.reload(); }, 1200);
            return;
        }
        const url = new URL(window.location.href);
        url.searchParams.set("tm_update", String(Date.now()));
        window.location.replace(url.toString());
    }

    function openExternal(url) {
        if (!url) return;
        const Browser = window.Capacitor && window.Capacitor.Plugins ? window.Capacitor.Plugins.Browser : null;
        if (Browser && Browser.open) {
            Browser.open({ url }).catch(() => { window.location.href = url; });
            return;
        }
        window.open(url, "_blank", "noopener");
    }

    async function checkForUpdates(manual = false) {
        if (isElectron()) {
            setCheckingUI(true);
            try {
                const res = await window.electronAPI.checkForUpdates();
                if (!res.success && manual) showToast("Could not check for updates.", "error");
            } catch (_) {
                if (manual) showToast("Could not check for updates.", "error");
            }
            return;
        }
        return checkClientUpdates(manual);
    }

    function showUpdateAvailable(info) {
        const container = $("updateNotifier");
        if (!container) return;
        const ver = info.version || "unknown";
        container.innerHTML = `
            <div class="update-alert alert alert-warning border-warning d-flex align-items-center" role="alert">
                <div>
                    <strong>Update available!</strong> Tech Monster v${escapeHtml(ver)} is ready.
                </div>
                <button class="btn btn-sm btn-primary ms-2" onclick="window.Updater.downloadUpdate()">Download</button>
                <button class="btn btn-sm btn-link ms-2 text-decoration-none" onclick="window.Updater.hideUpdateUI()">Later</button>
            </div>`;
        container.classList.remove("d-none");
    }

    function showUpdateReadyToInstall(info) {
        const container = $("updateNotifier");
        if (!container) return;
        const ver = info.version || "unknown";
        container.innerHTML = `
            <div class="update-alert alert alert-success border-success d-flex align-items-center" role="alert">
                <div>
                    <strong>Update downloaded!</strong> Tech Monster v${escapeHtml(ver)} is ready to install.
                </div>
                <button class="btn btn-sm btn-success ms-2" onclick="window.Updater.installUpdate()">Restart &Install</button>
            </div>`;
        container.classList.remove("d-none");
    }

    function hideUpdateUI() {
        const container = $("updateNotifier");
        if (container) container.classList.add("d-none");
    }

    function setCheckingUI(checking) {
        const btn = $("checkUpdateBtn");
        const spinner = $("updateSpinner");
        if (btn) btn.disabled = checking;
        if (spinner) spinner.style.display = checking ? "inline-block" : "none";
    }

    function setDownloadProgress(p) {
        const bar = $("updateProgressBar");
        const pct = $("updateProgressPct");
        if (!bar) return;
        if (p.percent !== undefined) {
            bar.style.width = p.percent + "%";
            bar.setAttribute("aria-valuenow", p.percent);
            if (pct) pct.textContent = Math.round(p.percent) + "%";
            bar.parentElement.classList.remove("d-none");
        }
    }

    async function downloadUpdate() {
        if (!window.electronAPI) return;
        setDownloadProgress({ percent: 0 });
        try {
            const res = await window.electronAPI.downloadUpdate();
            if (!res.success) showToast("Download failed: " + (res.error || ""), "error");
        } catch (_) {
            showToast("Download failed.", "error");
        }
    }

    function installUpdate() {
        if (isElectron()) {
            window.electronAPI.quitAndInstall();
            return;
        }
        if (isNative()) {
            openExternal((updateInfo && updateInfo.url) || config().androidDownloadUrl);
            return;
        }
        activateWaitingWorkerOrReload();
    }

    function escapeHtml(value) {
        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function showToast(msg, type = "info") {
        let toast = $("updateToast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "updateToast";
            toast.className = "toast align-items-center text-white bg-" + type + " border-0 position-fixed bottom-0 end-0 m-3";
            toast.setAttribute("role", "alert");
            toast.innerHTML = `<div class="d-flex"><div class="toast-body" id="updateToastMsg"></div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>`;
            document.body.appendChild(toast);
        }
        $("updateToastMsg").textContent = msg;
        if (window.bootstrap && bootstrap.Toast) {
            new bootstrap.Toast(toast, { autohide: true, delay: 4000 }).show();
        }
    }

    return {
        init,
        checkForUpdates,
        downloadUpdate,
        installUpdate,
        hideUpdateUI,
        getVersion: () => currentVersion,
        isNative
    };
})();

document.addEventListener("DOMContentLoaded", () => {
    window.Updater.init();
});
