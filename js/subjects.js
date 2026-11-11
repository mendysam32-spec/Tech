window.TMSubjects = (function () {
    // Android app: only Technical Drawing and SES are bundled for offline use.
    // Other subjects (and the web/PWA build) keep the existing offline policy.
    const ANDROID_OFFLINE_SUBJECTS = ["Technical Drawing", "SES"];
    const WEB_OFFLINE_SUBJECTS = ["Technical Drawing", "English", "Maths", "SES"];
    const DEFAULT_SUBJECTS = ["Technical Drawing", "English", "Maths", "Science", "SES"];

    function isNativeApp() {
        return !!(window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform());
    }

    function currentOfflineSubjects() {
        return isNativeApp() ? ANDROID_OFFLINE_SUBJECTS.slice() : WEB_OFFLINE_SUBJECTS.slice();
    }

    function normalize(name) {
        return String(name || "").trim().toLowerCase();
    }

    function isOnline() {
        return typeof navigator === "undefined" || navigator.onLine !== false;
    }

    function isOfflineSubject(name) {
        const key = normalize(name);
        return currentOfflineSubjects().some(item => normalize(item) === key);
    }

    function requiresConnection(name) {
        return !isOfflineSubject(name);
    }

    function isAvailable(name) {
        return isOnline() || isOfflineSubject(name);
    }

    function listOffline() {
        return currentOfflineSubjects();
    }

    function listDefault() {
        return DEFAULT_SUBJECTS.slice();
    }

    function offlineSummary() {
        const list = currentOfflineSubjects();
        if (list.length <= 1) return list[0] || "No subjects";
        return `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`;
    }

    function label(name) {
        return requiresConnection(name) ? `${name} (Online only)` : String(name);
    }

    function promptOnline(name) {
        if (isOnline()) return true;
        const subject = String(name || "This subject");
        let overlay = document.getElementById("tmOnlineRequired");
        if (overlay) overlay.remove();

        overlay = document.createElement("div");
        overlay.id = "tmOnlineRequired";
        overlay.style.cssText = "position:fixed;inset:0;z-index:2000;display:flex;align-items:center;justify-content:center;padding:1rem;background:rgba(15,23,42,.65);";
        overlay.innerHTML = `
            <div role="dialog" aria-modal="true" aria-labelledby="tmOnlineTitle" style="width:100%;max-width:430px;border-radius:18px;padding:1.5rem;background:#fff;box-shadow:0 24px 60px rgba(15,23,42,.35);">
                <h5 id="tmOnlineTitle" style="margin:0 0 .6rem;color:#0f172a;">Internet required</h5>
                <p style="margin:0 0 1rem;color:#475569;"><strong>${escapeText(subject)}</strong> is available online only. Connect to the internet to continue. ${escapeText(offlineSummary())} still work offline.</p>
                <div style="display:flex;gap:.6rem;justify-content:flex-end;flex-wrap:wrap;">
                    <button type="button" data-tm-online-close style="border:1px solid #cbd5e1;background:#fff;color:#334155;border-radius:10px;padding:.55rem .9rem;font-weight:600;">Close</button>
                    <button type="button" data-tm-online-retry style="border:0;background:#2563eb;color:#fff;border-radius:10px;padding:.55rem .9rem;font-weight:700;">I'm online now</button>
                </div>
            </div>`;
        document.body.appendChild(overlay);

        const close = () => overlay.remove();
        overlay.querySelector("[data-tm-online-close]").addEventListener("click", close);
        overlay.querySelector("[data-tm-online-retry]").addEventListener("click", () => {
            if (isOnline()) {
                close();
                window.location.reload();
            } else {
                const message = overlay.querySelector("p");
                if (message) message.innerHTML = `Still offline. Reconnect, then tap <strong>I'm online now</strong> again.`;
            }
        });
        overlay.addEventListener("click", event => {
            if (event.target === overlay) close();
        });
        return false;
    }

    function escapeText(value) {
        return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    function onChange(callback) {
        if (typeof callback !== "function") return;
        window.addEventListener("online", () => callback(true));
        window.addEventListener("offline", () => callback(false));
    }

    return {
        DEFAULT_SUBJECTS,
        isNativeApp,
        isOnline,
        isOfflineSubject,
        requiresConnection,
        isAvailable,
        listOffline,
        listDefault,
        label,
        offlineSummary,
        promptOnline,
        onChange
    };
})();
