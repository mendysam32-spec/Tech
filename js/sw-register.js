if ("serviceWorker" in navigator && !(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform())) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" }).then((reg) => {
            const notify = () => {
                if (!navigator.serviceWorker.controller) return;
                window.dispatchEvent(new CustomEvent("tm:update-ready", { detail: { registration: reg } }));
            };

            if (reg.waiting) notify();

            reg.addEventListener("updatefound", () => {
                const installing = reg.installing;
                if (!installing) return;
                installing.addEventListener("statechange", () => {
                    if (installing.state === "installed") notify();
                });
            });

            try { reg.update(); } catch (_) {}
        }).catch((err) => {
            console.warn("Tech Monster SW registration failed:", err);
        });
    });
}
