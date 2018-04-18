const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const router = require('./routes/dbRoutes.js');
const PORT = process.env.PORT || 3000;
const app = express();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a66af1cffec146d9a6e58897bd1917ed');

const data = newsapi.v2.everything({
    q: 'general',
    sources: 'vice-news',
    domains: 'https://news.vice.com',
    from: '2018-01-01',
    to: '2018-04-17',
    language: 'en',
    sortBy: 'publishedAt',
    page: 20
}).then(res => {
    console.log(res.articles)
    res.articles.forEach(article => {
        var li = document.createElement('li').innerHTML(article)
        document.getElemendByClass('api').appendChild(li)
    })
});
// app.get('/', (req, res) => {
//     res.send(data)
// });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', router);

// app.get('/', (req, res) => {
//     res.send('home page')
// })

app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`);
})
