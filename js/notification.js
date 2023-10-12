// Підключення до сервісу сповіщень (якщо необхідно)
if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Перевірка можливості відображення сповіщень
if ('Notification' in window && Notification.permission !== 'denied') {
    // Запит дозволу на відображення сповіщень
    Notification.requestPermission()
        .then(function (permission) {
            if (permission === 'granted') {
                console.log(true);
                // Дозвіл отримано, тут можна відображати сповіщення

                // Показати сповіщення #1
                showNotification("You’re now #1 in 'category name' xx");

                // Показати сповіщення #2
                showNotification("Your look 'category name' moved up in the Leaderboard <3");

                // Показати сповіщення #3
                showNotification("You’re in the Top 10 of all ootd xoxo");
            }
        });
}

// Функція для відображення сповіщень
function showNotification(message) {
    console.log(message);
    if (Notification.permission === 'granted') {
        console.log(Notification.permission);
        const options = {
            body: message,
            icon: './assets/mahestic.png',
        };

        // new Notification('Notification', options);
        registration.showNotification('Notification', options);
    }
}
