if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('../js/service-workers.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);

            Notification.requestPermission().then(perm => {

                if (perm === 'granted') {
                    console.log(perm);
                    // const options = {
                    //     body: "Your message here",
                    //     // icon: './assets/mahestic.png',
                    // };

                    const notification = new Notification('Text',
                        {
                            body: 'More text',
                            data: { hello: 'world' },
                            // icon: '../assets/majestic.png',
                            // tag: "welcome"
                        })


                    notification.addEventListener('error', e => {
                        console.log(e);
                    })
                    // registration.showNotification('Notification', options);
                }
            })


        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}
