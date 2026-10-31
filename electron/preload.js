const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getOnlineStatus: () => ipcRenderer.invoke("get-online-status"),
  onOnlineStatus: (cb) => {
    const sub = (e, online) => cb(online);
    ipcRenderer.on("online-status", sub);
    return () => ipcRenderer.off("online-status", sub);
  },
  checkForUpdates: () => ipcRenderer.invoke("check-for-updates"),
  downloadUpdate: () => ipcRenderer.invoke("download-and-install-update"),
  quitAndInstall: () => ipcRenderer.invoke("quit-and-install"),
  onUpdateStatus: (cb) => {
    const sub = (e, status) => cb(status);
    ipcRenderer.on("update-status", sub);
    return () => ipcRenderer.off("update-status", sub);
  },
  onUpdateAvailable: (cb) => {
    const sub = (e, info) => cb(info);
    ipcRenderer.on("update-available", sub);
    return () => ipcRenderer.off("update-available", sub);
  },
  onUpdateNotAvailable: (cb) => {
    const sub = () => cb();
    ipcRenderer.on("update-not-available", sub);
    return () => ipcRenderer.off("update-not-available", sub);
  },
  onUpdateError: (cb) => {
    const sub = (e, msg) => cb(msg);
    ipcRenderer.on("update-error", sub);
    return () => ipcRenderer.off("update-error", sub);
  },
  onUpdateProgress: (cb) => {
    const sub = (e, p) => cb(p);
    ipcRenderer.on("update-progress", sub);
    return () => ipcRenderer.off("update-progress", sub);
  },
  onUpdateDownloaded: (cb) => {
    const sub = (e, info) => cb(info);
    ipcRenderer.on("update-downloaded", sub);
    return () => ipcRenderer.off("update-downloaded", sub);
  },
  getAppVersion: () => ipcRenderer.invoke("get-app-version"),
  chooseDirectory: () => ipcRenderer.invoke("choose-directory"),
  saveFile: (opts) => ipcRenderer.invoke("save-file", opts),
  openFile: () => ipcRenderer.invoke("open-file"),
  isElectron: true,
});
