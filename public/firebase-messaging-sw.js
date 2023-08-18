/// <reference lib="webworker" />

const _version = 'v1';
const cacheName = 'v1';
const cacheList = ['QRTaxi', 'PWA'];
const consoleMessage = message => {
  console.log(`Service Worker : ${message}`);
};

self.addEventListener('install', () => {
  self.skipWaiting();
  caches.open(cacheName).then(cache => {
    consoleMessage('Caching APP');
    return cache.addAll(cacheList);
  });
  consoleMessage('INSTALL');
});

self.addEventListener('activate', () => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== cacheName) {
            consoleMessage('Removing old cache' + key);
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
  consoleMessage('ACTIVE');
});

self.addEventListener('push', event => {
  if (!event.data) return;

  const message = event.data.json();
  const notificationOptions = {
    body: message.notification.body,
    icon: '/icons/QT_initial_v1.svg',
    data: { url: `${self.location.origin}/${message.data.status}` },
  };
  event.waitUntil(
    self.registration.showNotification(
      message.notification.title,
      notificationOptions,
    ),
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const targetUrl = event.notification.data.url;

  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        // 해당 URL의 탭이 이미 열려 있는지 확인
        // If a Window tab matching the targeted URL already exists, focus that;
        const hadWindowToFocus = clientList.some(windowClient =>
          windowClient.url === targetUrl ? (windowClient.focus(), true) : false,
        );
        // Otherwise, open a new tab to the applicable URL and focus it.
        if (!hadWindowToFocus)
          clients
            .openWindow(e.notification.data.url)
            .then(windowClient => (windowClient ? windowClient.focus() : null));
      }),
  );
});
