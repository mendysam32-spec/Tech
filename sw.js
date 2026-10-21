const CACHE_NAME = "tech-monster-shell-v1";
const DATA_CACHE_NAME = "tech-monster-data-v1";
const API_PREFIX = "/api/";

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
  "./css/bootstrap.min.css",
  "./css/theme.css",
  "./js/bootstrap.bundle.min.js",
  "./js/admin.js",
  "./js/api.js",
  "./js/app.js",
  "./js/dashboard.js",
  "./js/engine.js",
  "./js/leaderboard.js",
  "./js/letter-game.js",
  "./js/library.js",
  "./js/motivational.js",
  "./js/nav.js",
  "./js/notes.js",
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
  "./data/english-letter-writing.js",
  "./data/english-passages-comp2.js",
  "./data/english-passages-sum2.js",
  "./data/english-passages.js",
  "./data/notes-english.js",
  "./data/notes-maths.js",
  "./data/notes-science.js",
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

function isShell(urlPath) {
  return SHELL_URLS.some(s => normalizeUrl(s) === urlPath || urlPath.endsWith(normalizeUrl(s)));
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_URLS.map(u => new URL(u, location.origin).href)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE_NAME && k !== DATA_CACHE_NAME).map((k) => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = normalizeUrl(event.request.url);

  if (url.startsWith(API_PREFIX)) {
    event.respondWith(
      fetch(event.request).then((response) => {
        if (event.request.method === "GET" && response.ok) {
          const copy = response.clone();
          caches.open(DATA_CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => {
        return caches.match(event.request).then((cached) => cached || new Response(JSON.stringify({ error: "offline" }), { status: 503, headers: { "Content-Type": "application/json" } }));
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response.ok && event.request.method === "GET") {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      });
    }).catch(() => cached || new Response("", { status: 503 }))
  );
});
