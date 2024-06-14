const express = require('express');
const app = express();
const port = 3000;

// ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    // cards
    const cardData = [
        {
            icon: 'ri-bar-chart-grouped-line',
            title: 'Card title 1',
            desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            buttonText: 'Read More'
        },
        {
            icon: 'ri-bar-chart-grouped-line',
            title: 'Card title 2',
            desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            buttonText: 'Read More'
        },
        {
            icon: 'ri-bar-chart-grouped-line',
            title: 'Card title 3',
            desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            buttonText: 'Read More'
        },
        {
            icon: 'ri-bar-chart-grouped-line',
            title: 'Card title 4',
            desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            buttonText: 'Read More'
        },
        {
            icon: 'ri-bar-chart-grouped-line',
            title: 'Card title 5',
            desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            buttonText: 'Read More'
        }
    ];

    res.render('index', { cardData });
});

// server started
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
