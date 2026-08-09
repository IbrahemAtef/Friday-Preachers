const CACHE_NAME = 'friday-preachers-v9';
const ASSETS = [
    './',
    './index.html',
    './admin.html',
    './firebase-config.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap'
];

// Install Event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching assets');
                return Promise.allSettled(ASSETS.map(asset => cache.add(asset)));
            })
    );
});

// Activate Event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))
            );
        })
    );
});

// Fetch Event (Network First for HTML, Cache First for others)
self.addEventListener('fetch', event => {
    const url = event.request.url;
    
    // For HTML files or root, try Network First
    if (url.includes('.html') || url.endsWith('/') || !url.includes('.')) {
        event.respondWith(
            fetch(event.request)
                .then(fetchRes => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, fetchRes.clone());
                        return fetchRes;
                    });
                })
                .catch(() => caches.match(event.request))
        );
    } else {
        // Cache First for other assets (images, fonts, etc.)
        event.respondWith(
            caches.match(event.request)
                .then(cacheRes => {
                    return cacheRes || fetch(event.request).then(fetchRes => {
                        return caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, fetchRes.clone());
                            return fetchRes;
                        });
                    });
                })
        );
    }
});
