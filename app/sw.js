// Keeps the app's own page and icons for when the phone is offline; it never touches the panel or its link.
var CACHE = 'ddes-app-v1';
var PROPIOS = ['/app/', '/app/app.js', '/app/manifest.webmanifest', '/app/icono-192.png', '/app/icono-512.png', '/app/icono-maskable-512.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(PROPIOS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (u.origin !== self.location.origin || u.pathname.indexOf('/app/') !== 0 || e.request.method !== 'GET') { return; }
  e.respondWith(fetch(e.request).then(function (r) {
    var copia = r.clone();
    caches.open(CACHE).then(function (c) { c.put(e.request, copia); });
    return r;
  }).catch(function () { return caches.match(e.request).then(function (r) { return r || caches.match('/app/'); }); }));
});
