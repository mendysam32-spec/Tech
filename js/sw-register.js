if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" }).then(async (reg) => {
            // Ask any waiting worker to take over immediately so updates land fast.
            if (reg.waiting) {
                reg.waiting.postMessage({ type: "SKIP_WAITING" });
            }
            reg.addEventListener("updatefound", () => {
                const installing = reg.installing;
                if (!installing) return;
                installing.addEventListener("statechange", () => {
                    if (installing.state === "installed" && navigator.serviceWorker.controller) {
                        installing.postMessage({ type: "SKIP_WAITING" });
                    }
                });
            });
            // Check for a new worker in the background on every page load.
            try { reg.update(); } catch (_) {}
        }).catch((err) => {
            console.warn("Tech Monster SW registration failed:", err);
        });
    });
}
