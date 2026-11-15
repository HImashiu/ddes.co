// Panel DDES as an installed app. The panel's link (with its key) arrives once in the URL fragment, which browsers
// never send to the server, is kept only in this phone's storage, and is wiped from the address bar at once.
// Only the real panel's link is kept: its deployment id must match the fingerprint below (SHA-256), so a crafted
// ddes.co/app link cannot point the app at someone else's page, and the panel's address is not published here.
// Opened from the home-screen icon, the page goes straight to the panel.
(function () {
  'use strict';
  var K = 'ddes-panel-enlace';
  var HUELLA = 'ff158977d34e8ba7b15995cf6d3d5079e349f3dacedcf5d3018620411739049f';
  var $ = function (id) { return document.getElementById(id); };
  var forma = function (u) { return /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec\?k=[A-Za-z0-9_%.~!*'()-]+$/.test(u || ''); };
  var leer = function () { try { return localStorage.getItem(K); } catch (e) { return null; } };
  var aviso = null;

  // True only for a well-formed link whose deployment id has the panel's fingerprint.
  function delPanel(u) {
    if (!forma(u) || !window.crypto || !crypto.subtle) { return Promise.resolve(false); }
    var id = u.split('/macros/s/')[1].split('/exec')[0];
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(id)).then(function (b) {
      return Array.prototype.map.call(new Uint8Array(b), function (x) { return ('0' + x.toString(16)).slice(-2); }).join('') === HUELLA;
    }).catch(function () { return false; });
  }

  // Takes the link from the fragment, if any; the fragment is always cleared first.
  function tomar() {
    var h = location.hash.slice(1);
    if (!h) { return Promise.resolve(); }
    history.replaceState(null, '', location.pathname);
    if (h.indexOf('u=') !== 0) { return Promise.resolve(); }
    var u = null;
    try { u = decodeURIComponent(h.slice(2)); } catch (e) { u = null; }
    return delPanel(u).then(function (ok) {
      if (ok) { try { localStorage.setItem(K, u); } catch (e) { /* private mode: nothing kept */ } }
    });
  }

  function pintar() {
    var enlace = leer();
    return delPanel(enlace).then(function (ok) {
      $('sin').hidden = ok;
      $('con').hidden = !ok;
      if (ok) { $('abrir').href = enlace; }
      $('instalar').hidden = !(ok && aviso);
    });
  }

  var app = window.matchMedia && (window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(display-mode: minimal-ui)').matches);
  tomar().then(function () {
    var enlace = leer();
    return delPanel(enlace).then(function (ok) {
      if (app && ok) { location.replace(enlace); return; }
      return pintar();
    });
  });

  window.addEventListener('hashchange', function () { tomar().then(pintar); });
  $('olvidar').addEventListener('click', function () {
    try { localStorage.removeItem(K); } catch (e) { /* nothing to remove */ }
    pintar();
  });
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); aviso = e; pintar(); });
  $('instalar').addEventListener('click', function () {
    if (!aviso) { return; }
    aviso.prompt();
    aviso.userChoice.then(function () { aviso = null; pintar(); });
  });
  window.addEventListener('appinstalled', function () { $('sub').textContent = 'Instalado. Ábralo desde el ícono de DDES.'; });
  if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/app/sw.js', { scope: '/app/' }).catch(function () { /* the panel still opens */ }); }
})();
