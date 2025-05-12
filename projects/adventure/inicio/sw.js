const CACHE_NAME = 'adventure-cache-v1';
const urlsToCache = [
    './',
    './inicio.html',
    './main.css',
    './dots.js',
    '../img/aventura1.jpg',
    '../img/aventura2.jpg',
    '../img/aventura3.jpg',
    '../img/icon128.png',
    '../img/icon512.png',
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

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
}
);

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
}
);