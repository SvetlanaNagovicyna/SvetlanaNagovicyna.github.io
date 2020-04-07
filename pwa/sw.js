'use strict';

importScripts('lander/test5/sw-toolbox.js');
toolbox.router.get('/static/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5 });

const apiUrl = '/client-api';
const api = {
  putRequest(path, data) {
    const req = new Request(apiUrl + path, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data)
    });
    return self.fetch(req);
  }
};

self.addEventListener('push', function (event) {
  const notification = JSON.parse(event.data.text());
  console.log('[Service Worker] Push Received.', notification);

  event.waitUntil(
    self.registration.showNotification(notification.title, notification)
      .then(function() {
        return api.putRequest(`/client/push-messages/${notification.data.pushId}`, { status: 'delivered' })
      })
      .then(function(result) {
        console.log('[Service Worker] Updated status to delivered for push messages');
        return result.text()
      })
      .then(console.log)
      .catch(console.error)
  );
});

self.addEventListener('notificationclick', function (event) {
  console.log('[Service Worker] Notification click Received.', event);

  event.notification.close();

  let requestSent = false;

  // If the request freezes
  setTimeout(() => {
    if (!requestSent) {
      console.log('[Service Worker] Request freezes, let\'s open window');
      return clients.openWindow(event.notification.data.url);
    }
  }, 3000);

  event.waitUntil(
    api.putRequest(`/client/push-messages/${event.notification.data.pushId}`, { status: 'clicked' })
      .then(result => {
        requestSent = true;
        console.log('[Service Worker] Updated status to clicked for push messages');
        return result.text()
      })
      .then(text => {
        console.log('[Service Worker] ', text);
        return clients.openWindow(event.notification.data.url);
      })
      .catch(err => {
        console.error(err);
        requestSent = true;
        return clients.openWindow(event.notification.data.url);
      })
  );
});

self.addEventListener('pushsubscriptionchange', function (event) {
  console.log('[Service Worker]: \'pushsubscriptionchange\' event fired.');

  event.waitUntil(
    self.registration.pushManager.getSubscription()
      .then(function (newSubscription) {
        console.log('[Service Worker] New subscription: ', newSubscription);
        return api.putRequest('/client', { webPush: newSubscription });
      })
      .then(function(result) {
        console.log('[Service Worker] Updated web push subscription');
        return result.text()
      })
      .then(console.log)
      .catch(console.error)
  );
});