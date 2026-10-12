const CACHE_NAME = "e-learning-sma-v1";

const FILES_TO_CACHE = [
    "index.html",
    "dashboard.html",
    "mapel.html",
    "pertemuan.html",
    "pertemuan2.html",
    "pertemuan3.html",
    "progress.html",
    "profil.html"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});