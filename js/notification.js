// if ('serviceWorker' in navigator && 'PushManager' in window) {
//     navigator.serviceWorker.register('../js/service-workers.js')
//         .then(function (registration) {
//             console.log('Service Worker registered with scope:', registration.scope);

//             Notification.requestPermission().then(perm => {

//                 if (perm === 'granted') {
//                     console.log(perm);

//                     showNotification("You’re now #1 in “category name” xx");

//                 }
//             })
//         })
//         .catch(function (error) {
//             console.error('Service Worker registration failed:', error);
//         });
// }

// // Функція для відображення сповіщень
// function showNotification(message) {
//     const notification = new Notification('OOTD MESSAGE',
//         {
//             body: `${message}`,
//             // data: { hello: 'world' },
//             icon: '../assets/manifest.png',
//             // tag: "welcome"
//         })


//     notification.addEventListener('error', e => {
//         console.log(e);
//     })
// }


// Підключення до сервісу сповіщень (якщо необхідно)
if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);

            // Перевірка можливості відображення сповіщень
            if (Notification.permission === 'granted') {
                // Показати сповіщення #1
                showNotification(registration, "You’re now #1 in 'category name' xx");

                // Показати сповіщення #2
                showNotification(registration, "Your look 'category name' moved up in the Leaderboard <3");

                // Показати сповіщення #3
                showNotification(registration, "You’re in the Top 10 of all ootd xoxo");
            } else if (Notification.permission !== 'denied') {
                // Запит дозволу на відображення сповіщень
                Notification.requestPermission()
                    .then(function (permission) {
                        if (permission === 'granted') {
                            // Показати сповіщення #1
                            showNotification(registration, "You’re now #1 in 'category name' xx");

                            // Показати сповіщення #2
                            showNotification(registration, "Your look 'category name' moved up in the Leaderboard <3");

                            // Показати сповіщення #3
                            showNotification(registration, "You’re in the Top 10 of all ootd xoxo");
                        }
                    });
            }
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Функція для відображення сповіщень
function showNotification(registration, message) {
    if (Notification.permission === 'granted') {
        const options = {
            body: message,
            icon: '../assets/majestic.png', // Ви маєте помилку в шляху до іконки
        };

        registration.showNotification('Notification', options);
    }
}
