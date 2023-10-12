if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);

            Notification.requestPermission().then(perm => {

                if (perm === 'granted') {
                    console.log(perm);

                    showNotification("Your message here");

                }
            })
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Функція для відображення сповіщень
function showNotification(message) {
    const notification = new Notification('Text',
        {
            body: `${message}`,
            data: { hello: 'world' },
            icon: '../assets/majestic.png',
            tag: "welcome"
        })


    notification.addEventListener('error', e => {
        console.log(e);
    })
}

