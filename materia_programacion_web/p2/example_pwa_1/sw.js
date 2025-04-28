const CACHE_NAME = "v0_pwa_ejemplo",
    urlsToCache = [
        './',
        'https://fonts.googleapis.com/css2?family=Raleway:400,700',
        'https://fonts.gstatic.com/s/raleway/v1/0n8c4g2v3a5x7e6f4g.woff2',
        'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        'https://use.fontawesome.com/releases/v5.15.4/webfonts/fa-solid-900.woff2',
        './style.css',
        './img/logo.png',
        './img/favicon.png'
    ]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
            .then(() => self.skipWaiting())
        })
        .catch(err => console.log('Error en la fase de instalación: ', err))
    )
});


self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];
    e.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if(cacheWhitelist.indexOf(cacheName) === -1){
                            return caches.delete(cacheName);
                        }
                    })      
                )
            })
            .then(() => self.clients.claim())
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if(res){
                    return res;
                }
                return fetch(e.request);
            })
    )
})

