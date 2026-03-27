const CACHE_NAME = 'atc-radar-v1';
const ASSETS = [
  './',
  './index.html',
  './data.json',
  './icon.png',
  './manifest.json'
];

// Installa il Service Worker e salva i file in cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Controlla se ci sono aggiornamenti ogni volta che apri l'app
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
