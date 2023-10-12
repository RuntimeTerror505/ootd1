if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);

            Notification.requestPermission().then(perm => {

                if (perm === 'granted') {
                    console.log(perm);

                    showNotification("You’re now #1 in “category name” xx");

                }
            })
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Функція для відображення сповіщень
function showNotification(message) {
    const notification = new Notification('OOTD MESSAGE',
        {
            body: `${message}`,
            // data: { hello: 'world' },
            icon: '../assets/manifes.png',
            // tag: "welcome"
        })


    notification.addEventListener('error', e => {
        console.log(e);
    })
}

