if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);
            Notification.requestPermission().then(perm => {
                if (perm === 'granted') {
                    console.log(perm);
                    showNotificationInterval("Your look 'category name' moved up in the Leaderboard <3", 10000); // Викликаємо раз в 10 секунд (10000 мілісекунд)
                }
            })
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}

function showNotificationInterval(message, interval) {
    showNotification(message);
    setInterval(() => showNotification(message), interval);
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);

            showNotification("Your look 'category name' moved up in the Leaderboard <3");
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Функція для відображення сповіщень
function showNotification(message) {
    const notification = new Notification('OOTD',
        {
            body: `${message}`,
            icon: '../assets/manifest.png',
            // tag: "welcome"
        })

    notification.addEventListener('error', e => {
        console.log(e);
    })
}

