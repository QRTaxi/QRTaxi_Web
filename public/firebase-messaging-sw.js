/// <reference lib="webworker" />

self.addEventListener('install', event => {
  console.log('fcm sw install..');
  event.waitUntil(self.skipWaiting());
  // .catch((error: Error) => console.error(error))
});

self.addEventListener('activate', () => {
  console.log('fcm sw activate..');
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
  // Close the notification popout
  event.notification.close();
  // Get all the Window clients
  event.waitUntil(
    clients
      .openWindow(event.notification.data.url)
      .then(windowClient => (windowClient ? windowClient.focus() : null))
      .catch(error => console.error(error)),
  );
});
