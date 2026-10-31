/* =====================================================
   TECH MONSTER - Auto Updater UI
   Notifies users when a new version is available and
   provides a "Check for updates" button.
   ===================================================== */
window.Updater = (function () {
    let currentVersion = "";
    let updateInfo = null;
    let updateChecked = false;

    const $ = (id) => document.getElementById(id);

    function init() {
        if (!window.electronAPI) return; // only in Electron
        bindEvents();
        fetchVersion();
    }

    function bindEvents() {
        const btn = $("checkUpdateBtn");
        if (btn) btn.addEventListener("click", () => checkForUpdates(true));

        window.electronAPI.getAppVersion().then((v) => {
            currentVersion = v || "";
            const el = $("appVersion");
            if (el) el.textContent = `v${currentVersion}`;
        });

        window.electronAPI.onUpdateStatus((status) => {
            if (status === "checking") setCheckingUI(true);
        });
        window.electronAPI.onUpdateAvailable((info) => {
            updateInfo = info;
            updateChecked = true;
            showUpdateAvailable(info);
        });
        window.electronAPI.onUpdateNotAvailable(() => {
            updateChecked = true;
            hideUpdateUI();
        });
        window.electronAPI.onUpdateError((msg) => {
            updateChecked = true;
            hideUpdateUI();
            showToast("Update check failed: " + msg, "error");
        });
        window.electronAPI.onUpdateProgress((p) => {
            setDownloadProgress(p);
        });
        window.electronAPI.onUpdateDownloaded((info) => {
            updateInfo = info;
            showUpdateReadyToInstall(info);
        });
    }

    async function fetchVersion() {
        try {
            const v = await window.electronAPI.getAppVersion();
            currentVersion = v || "";
            const el = $("appVersion");
            if (el) el.textContent = `v${currentVersion}`;
        } catch (_) {}
    }

    async function checkForUpdates(manual = false) {
        if (!window.electronAPI) return;
        setCheckingUI(true);
        try {
            const res = await window.electronAPI.checkForUpdates();
            if (!res.success && manual) {
                showToast("Could not check for updates.", "error");
            }
        } catch (_) {
            if (manual) showToast("Could not check for updates.", "error");
        }
    }

    function showUpdateAvailable(info) {
        const container = $("updateNotifier");
        if (!container) return;
        const ver = info.version || "unknown";
        container.innerHTML = `
            <div class="update-alert alert alert-warning border-warning d-flex align-items-center" role="alert">
                <div>
                    <strong>Update available!</strong> Tech Monster v${ver} is ready.
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
                    <strong>Update downloaded!</strong> Tech Monster v${ver} is ready to install.
                </div>
                <button class="btn btn-sm btn-success ms-2" onclick="window.Updater.installUpdate()">Restart & Install</button>
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
        if (!window.electronAPI) return;
        window.electronAPI.quitAndInstall();
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
        const t = new bootstrap.Toast(toast, { autohide: true, delay: 4000 });
        t.show();
    }

    return {
        init,
        checkForUpdates,
        downloadUpdate,
        installUpdate,
        hideUpdateUI,
    };
})();

// Auto-init on DOM ready
document.addEventListener("DOMContentLoaded", () => {
    window.Updater.init();
});
