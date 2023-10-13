const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Замініть це на адресу вашого сайту
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// const vapidKey = '12345';

// Згенеруйте VAPID ключі (ви також можете використовувати свої ключі)
const vapidKeys = webpush.generateVAPIDKeys();
webpush.setVapidDetails(
    'mailto:example@example.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/vapid-key', (req, res) => {
    res.status(200).json({ publicKey: vapidKeys.publicKey });
})
// Служіть ваш файл HTML

const subscriptionArr = [];

// Обробка підписки на сповіщення від клієнта
app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    subscriptionArr.push(subscription);
    // Збережіть підписку в вашій базі даних (це потрібно реалізувати)
    // ...

    res.status(201).json({});
});

// Надсилання сповіщення підписаним клієнтам
app.post('/send-push-notification', (req, res) => {
    const { title, body, icon } = req.body;
    console.log(title, body, icon);
    subscriptionArr.forEach(pushSubscription => {
        webpush.sendNotification(pushSubscription, JSON.stringify({ title, body, icon }))
            .catch(error => {
                console.error('Помилка відправки сповіщення:', error);
            });
    });

    res.status(201).json({});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Сервер сповіщень прослуховує порт ${port}`);
});
