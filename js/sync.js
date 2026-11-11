const SYNC_KEY = "tm_syncQueue";
const SYNC_STATUS_KEY = "tm_syncStatus";

window.Sync = {
    queue() {
        try { return JSON.parse(localStorage.getItem(SYNC_KEY) || "[]"); } catch (_) { return []; }
    },
    save(q) {
        try { localStorage.setItem(SYNC_KEY, JSON.stringify(q)); } catch (_) {}
    },
    enqueue(item) {
        const q = this.queue();
        q.push({
            id: Date.now() + "-" + Math.random().toString(36).slice(2, 9),
            at: Date.now(),
            ...item
        });
        this.save(q);
        this.setStatus({ pending: q.length, lastAttempt: null, lastError: null });
    },
    setStatus(patch) {
        try {
            const cur = JSON.parse(localStorage.getItem(SYNC_STATUS_KEY) || "{}");
            localStorage.setItem(SYNC_STATUS_KEY, JSON.stringify({ ...cur, ...patch, updatedAt: Date.now() }));
        } catch (_) {}
    },
    getStatus() {
        try { return JSON.parse(localStorage.getItem(SYNC_STATUS_KEY) || "{}"); } catch (_) { return {}; }
    },
    async flush() {
        if (typeof navigator === "undefined" || navigator.onLine === false) {
            this.setStatus({ pending: this.queue().length, offline: true });
            return { flushed: 0, pending: this.queue().length, offline: true };
        }
        const token = localStorage.getItem("tm_sessionToken");
        const staffToken = localStorage.getItem("tm_staffToken");
        const q = this.queue();
        if (!q.length) {
            this.setStatus({ pending: 0, lastAttempt: Date.now(), offline: false });
            return { flushed: 0, pending: 0 };
        }
        const remaining = [];
        let flushed = 0;
        let curToken = token;
        let curStaffToken = staffToken;

        for (const item of q) {
            try {
                const headers = { "Content-Type": "application/json", ...(item.headers || {}) };
                if (curToken) headers.Authorization = `Bearer ${curToken}`;
                if (curStaffToken) headers.Authorization = `Bearer ${curStaffToken}`;
                const init = { method: item.method || "POST", headers };
                if (item.body) init.body = item.body;
                const apiBase = (window.API && (API.remoteBase || API.base)) || "/api";
                const res = await fetch(apiBase + item.path, init);
                if (!res.ok) throw new Error("HTTP " + res.status);
                const data = await res.json().catch(() => ({}));
                flushed++;

                if (item.path === "/login" || item.path === "/unified-login") {
                    if (data.sessionToken) {
                        curToken = data.sessionToken;
                        localStorage.setItem("tm_sessionToken", curToken);
                    }
                    if (data.user) this.storeSyncedUser(data.user);
                } else if (data.user && (item.path === "/score" || item.path === "/profile")) {
                    // Keep the device copy matching the server after replaying
                    // offline progress, so later online reads stay consistent.
                    this.storeSyncedUser(data.user);
                }
            } catch (err) {
                remaining.push(item);
                this.setStatus({ lastError: String(err.message || err), lastAttempt: Date.now() });
            }
        }

        this.save(remaining);
        this.setStatus({ pending: remaining.length, lastAttempt: Date.now(), offline: false });
        return { flushed, pending: remaining.length };
    },
    storeSyncedUser(user) {
        if (!user) return;
        if (typeof Storage !== "undefined" && Storage.setCurrentUser) {
            try { Storage.setCurrentUser(user); return; } catch (_) {}
        }
        try { localStorage.setItem("tm_currentUser", JSON.stringify(user)); } catch (_) {}
    },
    flushIfOnline() {
        if (typeof navigator !== "undefined" && navigator.onLine === false) return;
        this.flush();
    },
    clear() {
        this.save([]);
        this.setStatus({ pending: 0 });
    }
};

window.addEventListener("online", () => {
    window.Sync.flush();
});

window.addEventListener("load", () => {
    // A fresh app launch can already be online with queued offline work.
    window.Sync.flushIfOnline();
});

document.addEventListener("visibilitychange", () => {
    if (!document.hidden) window.Sync.flushIfOnline();
});

// Capacitor Android: flush as soon as the app returns to the foreground.
(function () {
    try {
        const Plugins = window.Capacitor && window.Capacitor.Plugins;
        const App = Plugins && Plugins.App;
        if (!App || typeof App.addListener !== "function") return;
        App.addListener("resume", () => window.Sync.flushIfOnline());
        App.addListener("appStateChange", state => {
            if (state && state.isActive) window.Sync.flushIfOnline();
        });
    } catch (_) {}
})();

window.addEventListener("beforeunload", () => {
    const q = window.Sync.queue();
    if (q.length && navigator.onLine) {
        window.Sync.flush();
    }
});
