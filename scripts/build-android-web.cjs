const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const out = path.join(root, "www");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const version = pkg.version;

const HTML_FILES = [
    "index.html",
    "dashboard.html",
    "library.html",
    "notes.html",
    "quiz.html",
    "result.html",
    "review.html",
    "settings.html",
    "offline.html"
];

const ROOT_FILES = ["manifest.json", "version.json", "sw.js"];
const ASSET_DIRS = ["js", "css", "images"];

function rm(target) {
    fs.rmSync(target, { recursive: true, force: true });
}

function copyFile(from, to) {
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
}

function copyDir(from, to, filter) {
    if (!fs.existsSync(from)) return;
    fs.mkdirSync(to, { recursive: true });
    for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
        const source = path.join(from, entry.name);
        const dest = path.join(to, entry.name);
        if (entry.isDirectory()) {
            copyDir(source, dest, filter);
        } else if (!filter || filter(source)) {
            copyFile(source, dest);
        }
    }
}

rm(out);
fs.mkdirSync(out, { recursive: true });

HTML_FILES.forEach((file) => copyFile(path.join(root, file), path.join(out, file)));
ROOT_FILES.forEach((file) => copyFile(path.join(root, file), path.join(out, file)));
ASSET_DIRS.forEach((dir) => copyDir(path.join(root, dir), path.join(out, dir)));
copyDir(path.join(root, "data"), path.join(out, "data"), (file) => file.toLowerCase().endsWith(".js"));

// Admin tools are web-only; never ship them inside the Android app.
rm(path.join(out, "admin.html"));
rm(path.join(out, "js", "admin.js"));

const versionPath = path.join(out, "version.json");
const manifest = JSON.parse(fs.readFileSync(versionPath, "utf8"));
manifest.version = version;
fs.writeFileSync(versionPath, JSON.stringify(manifest, null, 2) + "\n");

const buildVersion = Number(manifest.build || manifest.android?.versionCode || 0);
const configPath = path.join(out, "js", "config.js");
const config = fs.readFileSync(configPath, "utf8")
    .replace(/clientVersion:\s*"[^"]*"/, `clientVersion: "${version}"`)
    .replace(/clientBuild:\s*\d+/, `clientBuild: ${buildVersion}`);
fs.writeFileSync(configPath, config);

console.log(`Built Android web assets in www (v${version}).`);
