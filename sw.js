const CACHE_VERSION = "v6";
const CACHE_NAME = `tech-monster-shell-${CACHE_VERSION}`;
const DATA_CACHE_NAME = `tech-monster-data-${CACHE_VERSION}`;
const API_PREFIX = "/api/";
const OFFLINE_URL = "/offline.html";

const SHELL_URLS = [
  "./",
  "./index.html",
  "./dashboard.html",
  "./quiz.html",
  "./result.html",
  "./notes.html",
  "./library.html",
  "./review.html",
  "./settings.html",
  "./admin.html",
  "./offline.html",
  "./manifest.json",
  "./dashboard",
  "./quiz",
  "./library",
  "./result",
  "./review",
  "./settings",
  "./admin",
  "./notes",
  "./css/bootstrap.min.css",
  "./css/theme.css",
  "./js/bootstrap.bundle.min.js",
  "./js/admin.js",
  "./js/api.js",
  "./js/app.js",
  "./js/config.js",
  "./js/subjects.js",
  "./js/dashboard.js",
  "./js/engine.js",
  "./js/leaderboard.js",
  "./js/letter-game.js",
  "./js/levelup.js",
  "./js/library.js",
  "./js/motivational.js",
  "./js/nav.js",
  "./js/notes.js",
  "./js/note-images.js",
  "./js/result.js",
  "./js/review.js",
  "./js/settings.js",
  "./js/storage.js",
  "./js/sync.js",
  "./js/sw-register.js",
  "./data/2015.js",
  "./data/2019.js",
  "./data/2021.js",
  "./data/2022.js",
  "./data/2025.js",
  "./data/2026.js",
  "./data/english-2026.js",
  "./data/english-book.js",
  "./data/english-notes-detail.js",
  "./data/english-letter-writing.js",
  "./data/english-passages-comp2.js",
  "./data/english-passages-sum2.js",
  "./data/english-passages.js",
  "./data/foundation-science-book.js",
  "./data/foundation-science-notes.js",
  "./data/notes-english.js",
  "./data/notes-maths.js",
  "./data/notes-science.js",
  "./data/note-images.js",
  "./data/notesData.js",
  "./data/papers.js",
  "./data/questions-english-g7.js",
  "./data/questions-english-g8a.js",
  "./data/questions-english-g8b-g9.js",
  "./data/questions-english.js",
  "./data/questions-maths.js",
  "./data/questions-science.js",
  "./data/questions-ses-coverage.js",
  "./data/questions-ses-gabece-a.js",
  "./data/questions-ses-gabece-b.js",
  "./data/questions-ses-gabece-c.js",
  "./data/questions-ses.js",
  "./data/questions.js",
  "./data/science-book.js",
  "./data/ses-book.js",
  "./data/ses-fullnotes.js",
  "./data/ses-g9-a.qs.js",
  "./data/ses-g9-b.qs.js",
  "./data/ses-g9-c.qs.js",
  "./data/ses-g9-d1.qs.js",
  "./data/ses-g9-d2.qs.js"
];

function normalizeUrl(url) {
  try { return new URL(url, location.origin).pathname; } catch (_) { return url; }
}

// Cloudflare Pages serves pretty URLs (/dashboard) and 308-redirects from
// /dashboard.html. Try both shapes so a cached shell is always found.
async function matchShell(request) {
  const direct = await caches.match(request, { ignoreSearch: true });
  if (direct) return direct;
  const path = normalizeUrl(request.url);
  const variants = new Set();
  if (path.endsWith(".html")) {
    variants.add(path.slice(0, -5));
  } else {
    variants.add(path + ".html");
  }
  for (const variant of variants) {
    const hit = await caches.match(new URL(variant, location.origin).href, { ignoreSearch: true });
    if (hit) return hit;
  }
  return null;
}

function isShell(urlPath) {
  return SHELL_URLS.some(s => normalizeUrl(s) === urlPath || urlPath.endsWith(normalizeUrl(s)));
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        SHELL_URLS.map(u => cache.add(new URL(u, location.origin).href))
      )
    )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter(k => k !== CACHE_NAME && k !== DATA_CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

function keepAlive(event, promise) {
  try { event.waitUntil(promise); } catch (_) {}
}

function writeToCache(cacheName, request, response) {
  return caches.open(cacheName)
    .then((cache) => cache.put(request, response))
    .catch(() => {});
}

async function apiResponse(event) {
  try {
    const response = await fetch(event.request);
    if (event.request.method === "GET" && response && response.ok) {
      keepAlive(event, writeToCache(DATA_CACHE_NAME, event.request, response.clone()));
    }
    return response;
  } catch (_) {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    return new Response(JSON.stringify({ error: "offline" }), {
      status: 503,
      headers: { "Content-Type": "application/json" }
    });
  }
}

async function navigationResponse(event) {
  try {
    const response = await fetch(event.request);
    if (response && response.ok) {
      keepAlive(event, writeToCache(CACHE_NAME, event.request, response.clone()));
    }
    return response;
  } catch (_) {
    const cached = await matchShell(event.request);
    if (cached) return cached;
    const offline = await caches.match(OFFLINE_URL, { ignoreSearch: true });
    if (offline) return offline;
    return new Response(
      "<!doctype html><meta charset=utf-8><title>Offline</title>" +
      "<body style=\"font-family:system-ui;padding:2rem;text-align:center\">" +
      "<h2>You are offline</h2><p>Check your internet connection and try again.</p></body>",
      { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
}

// App code (html/js/css) must always be the latest build, otherwise a
// deploy can leave students on stale UI. Network-first, cache as fallback.
// Large static data/images stay stale-while-revalidate for speed.
const APP_CODE = /\.(?:html?|js|css|json)$/i;

async function assetResponse(event) {
  const path = normalizeUrl(event.request.url);

  if (APP_CODE.test(path)) {
    try {
      const response = await fetch(event.request);
      if (response && response.ok) {
        keepAlive(event, writeToCache(CACHE_NAME, event.request, response.clone()));
      }
      return response;
    } catch (_) {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      return new Response("", { status: 503 });
    }
  }

  const cached = await caches.match(event.request);
  const network = fetch(event.request).then((response) => {
    if (response && response.ok && event.request.method === "GET") {
      keepAlive(event, writeToCache(CACHE_NAME, event.request, response.clone()));
    }
    return response;
  }).catch(() => null);
  if (cached) {
    keepAlive(event, network);
    return cached;
  }
  const fresh = await network;
  if (fresh) return fresh;
  return new Response("", { status: 503 });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = normalizeUrl(request.url);

  if (url.startsWith(API_PREFIX)) {
    event.respondWith(apiResponse(event));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(navigationResponse(event));
    return;
  }

  event.respondWith(assetResponse(event));
});
