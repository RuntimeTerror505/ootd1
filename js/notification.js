
if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);
            Notification.requestPermission().then(perm => {
                if (perm === 'granted') {
                    console.log(perm);
                    subscribeToPushNotifications(registration);
                }
            });
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}

async function subscribeToPushNotifications(registration) {
    const publicKey = 'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE3fp1Ze8TNZZmb3OJW3xH7CgV5X652Q2hZXO1sf+nANqlbKeg1SfFHPeAFB9dobtiffR+ol+ITX2TlgyyBcgLOQ=='; // Ваш VAPID публічний ключ

    const options = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
    };

    try {
        const subscription = await registration.pushManager.subscribe(options);
        // Отримання і збереження підписки на сервері
        // Тут ви можете відправити цю підписку на свій сервер або сервіс Pushpad
    } catch (error) {
        console.error('Failed to subscribe to push notifications:', error);
    }
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; i++) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
