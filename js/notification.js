if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);

            if (Notification.permission === 'granted') {
                console.log(Notification.permission);
                const options = {
                    body: "Your message here",
                    // icon: './assets/mahestic.png',
                };

                registration.showNotification('Notification', options);
            }
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}
