// Підключення до сервісу сповіщень (якщо необхідно)
if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);

            // Перевірка можливості відображення сповіщень
            if (Notification.permission === 'granted') {
                // Показати сповіщення #1
                showNotification("You’re now #1 in 'category name' xx");

                // Показати сповіщення #2
                showNotification("Your look 'category name' moved up in the Leaderboard <3");

                // Показати сповіщення #3
                showNotification("You’re in the Top 10 of all ootd xoxo");
            } else if (Notification.permission !== 'denied') {
                // Запит дозволу на відображення сповіщень
                Notification.requestPermission()
                    .then(function (permission) {
                        if (permission === 'granted') {
                            // Показати сповіщення #1
                            showNotification("You’re now #1 in 'category name' xx");

                            // Показати сповіщення #2
                            showNotification("Your look 'category name' moved up in the Leaderboard <3");

                            // Показати сповіщення #3
                            showNotification("You’re in the Top 10 of all ootd xoxo");
                        }
                    });
            }
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Функція для відображення сповіщень
function showNotification(message) {
    if (Notification.permission === 'granted') {
        const options = {
            body: message,
            icon: './assets/majestic.png', // Ви маєте помилку в шляху до іконки
        };

        registration.showNotification('Notification', options); // Зміни showNotification на self.registration.showNotification
    }
}
