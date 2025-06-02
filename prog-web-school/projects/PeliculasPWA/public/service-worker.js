const CACHE_NAME = 'static-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './Logo.png',
    './files/icons/camera128.png',
    './files/icons/camera192.png',
    './files/icons/camera256.png',
    './files/icons/camera512.png',
    './icons/icons/camera640.png',
    './files/interstellar.png',
    './files/enunciado.png',
    './files/jurassicpark.png',
    './files/placeholder.png',
    './files/superlopez.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log(urlsToCache);
                return cache.addAll(urlsToCache);
            })
    );
}
);

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(keyList.map((key) => {
                if(key !== CACHE_NAME){
                    console.log("[Service Worker] Removing old cache");
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request)
            .then((response) => {
                console.log("RESP", response);
                return response || fetch(event.request);
            });
        })
    );
    self.clients.claim();
});