if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);

            // Показати сповіщення
            showNotification("Your message here", registration);
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Функція для відображення сповіщень
function showNotification(message, registration) {
    if (Notification.permission === 'granted') {
        const options = {
            body: message,
            icon: './assets/mahestic.png',
        };

        registration.showNotification('Notification', options);
    }
}
