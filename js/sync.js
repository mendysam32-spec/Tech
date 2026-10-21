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
                const res = await fetch("/api" + item.path, init);
                if (!res.ok) throw new Error("HTTP " + res.status);
                const data = await res.json().catch(() => ({}));
                flushed++;

                if (item.path === "/login" || item.path === "/unified-login") {
                    if (data.sessionToken) {
                        curToken = data.sessionToken;
                        localStorage.setItem("tm_sessionToken", curToken);
                    }
                    if (data.user) localStorage.setItem("tm_currentUser", JSON.stringify(data.user));
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
    clear() {
        this.save([]);
        this.setStatus({ pending: 0 });
    }
};

window.addEventListener("online", () => {
    window.Sync.flush();
});

window.addEventListener("beforeunload", () => {
    const q = window.Sync.queue();
    if (q.length && navigator.onLine) {
        window.Sync.flush();
    }
});
