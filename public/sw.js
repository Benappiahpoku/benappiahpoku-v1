// <!-- ===== [New Feature] START ===== -->
// Minimal Service Worker for dev + simple offline caching.
// Keeps /sw.js present so the router doesn't treat it as navigation.
// In production the @vite-pwa/nuxt plugin typically generates a richer SW.
const CACHE_NAME = "app-shell-v1";
const CORE_ASSETS = [
  "/",

  "/manifest.json",
  "/favicon.ico",
  // add other critical assets if you want, e.g. '/offline.html'
];

self.addEventListener("install", (event) => {
  // Pre-cache core assets
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  // Clean up old caches and take control immediately
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) return caches.delete(key);
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

// Simple fetch strategy:
// - Navigation requests: try network first, fallback to cache
// - Other requests: cache-first, then network fallback
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignore requests to the dev server socket or chrome-extension, etc.
  if (
    request.url.startsWith("chrome-extension://") ||
    request.url.includes("__vite__")
  ) {
    return;
  }

  // Handle navigation (HTML) requests with network-first
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          // update cache in the background
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return res;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match("/"))
        )
    );
    return;
  }

  // For other requests, try cache first, then network
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((res) => {
          // Save to cache for future
          if (
            request.method === "GET" &&
            res &&
            res.status === 200 &&
            res.type !== "opaque"
          ) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return res;
        })
        .catch(() => {
          // Optional: return a default image/html for certain types
          return cached;
        });
    })
  );
});
// <!-- ===== [New Feature] END ===== -->
