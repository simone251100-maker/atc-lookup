const CACHE_NAME = 'atc-radar-v1';
const ASSETS = [
  'index.html',
  'data.json',
  'icon.png',
  'manifest.json'
];

// Installa e metti in cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Rispondi dalle risorse in cache o vai in rete
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
