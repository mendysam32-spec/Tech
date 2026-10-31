const { app, BrowserWindow, ipcMain, dialog, nativeImage, screen } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");
const fs = require("fs");
const isDev = process.env.NODE_ENV === "development";

// Disable automatic update checks from electron-updater; we control checking via IPC.
autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = false;

let mainWindow = null;
let isOnline = true;
const UPDATE_CHANNEL = "stable";

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const winWidth = Math.min(1200, width - 100);
  const winHeight = Math.min(800, height - 100);

  mainWindow = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    minWidth: 900,
    minHeight: 650,
    center: true,
    show: false,
    icon: path.join(__dirname, "..", "build", "icon.png"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
      webSecurity: false,
      allowRunningInsecureContent: true,
    },
  });

  const startUrl = isDev
    ? "http://localhost:5173"
    : `file://${path.join(__dirname, "..", "index.html")}`;

  mainWindow.loadURL(startUrl);

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  return mainWindow;
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// --- Online / offline tracking ---
function setOnline(online) {
  isOnline = online;
  if (mainWindow && mainWindow.webContents) {
    mainWindow.webContents.send("online-status", online);
  }
}

setOnline(process.platform !== "darwin" && typeof navigator === "undefined" ? true : true);

app.on("online", () => setOnline(true));
app.on("offline", () => setOnline(false));

// Expose online status to renderer via IPC sync
ipcMain.handle("get-online-status", () => isOnline);

// --- Auto-updater events ---
autoUpdater.on("checking-for-update", () => {
  if (mainWindow) mainWindow.webContents.send("update-status", "checking");
});
autoUpdater.on("update-available", (info) => {
  if (mainWindow) mainWindow.webContents.send("update-available", info);
});
autoUpdater.on("update-not-available", () => {
  if (mainWindow) mainWindow.webContents.send("update-not-available");
});
autoUpdater.on("error", (err) => {
  if (mainWindow) mainWindow.webContents.send("update-error", err.message);
});
autoUpdater.on("download-progress", (progress) => {
  if (mainWindow) mainWindow.webContents.send("update-progress", progress);
});
autoUpdater.on("update-downloaded", (info) => {
  if (mainWindow) mainWindow.webContents.send("update-downloaded", info);
});

// --- IPC: check for updates ---
ipcMain.handle("check-for-updates", async () => {
  try {
    await autoUpdater.checkForUpdates();
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// --- IPC: download and install update ---
ipcMain.handle("download-and-install-update", async () => {
  try {
    await autoUpdater.downloadUpdate();
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// --- IPC: quit and install ---
ipcMain.handle("quit-and-install", () => {
  autoUpdater.quitAndInstall();
});

// --- IPC: app version ---
ipcMain.handle("get-app-version", () => app.getVersion());

// --- IPC: choose directory (for export/backup) ---
ipcMain.handle("choose-directory", async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ["openDirectory", "createDirectory"],
  });
  return result;
});

// --- IPC: save file ---
ipcMain.handle("save-file", async (event, { defaultPath, data }) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    defaultPath,
    filters: [{ name: "JSON", extensions: ["json"] }],
  });
  if (!result.canceled && result.filePath) {
    fs.writeFileSync(result.filePath, JSON.stringify(data, null, 2));
    return { success: true, path: result.filePath };
  }
  return { success: false };
});

// --- IPC: open file ---
ipcMain.handle("open-file", async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ["openFile"],
    filters: [{ name: "JSON", extensions: ["json"] }],
  });
  if (!result.canceled && result.filePaths[0]) {
    const data = fs.readFileSync(result.filePaths[0], "utf-8");
    return { success: true, path: result.filePaths[0], data };
  }
  return { success: false };
});

module.exports = { createWindow, isOnline };
