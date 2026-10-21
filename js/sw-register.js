if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js", { scope: "/" }).then((reg) => {
            if (reg.waiting) {
                reg.waiting.postMessage({ type: "SKIP_WAITING" });
            }
        }).catch((err) => {
            console.warn("Tech Monster SW registration failed:", err);
        });
    });
}
