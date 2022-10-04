const cacheName = 'cache-students';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['/students/', '/students/index.html', '/students/icon-192.png', '/students/javascript.js','/students/members.json','/students/mainfest.json','/students/icon-512','/students/morten.png','/students/nina.png','/students/olivia.png']);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then(cache => cache.match(event.request))
    )
  );
});
