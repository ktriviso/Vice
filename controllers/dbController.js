const db = require('../models/dbModels.js');

module.exports = {

    // this is the api call
    data(req, res, next) {
        const NewsAPI = require('newsapi');
        const newsapi = new NewsAPI('a66af1cffec146d9a6e58897bd1917ed');

        newsapi.v2.everything({
            q: 'general',
            sources: 'vice-news',
            domains: 'https://news.vice.com',
            from: '2018-01-01',
            to: '2018-04-17',
            language: 'en',
            sortBy: 'publishedAt',
            page: 20
        }).then(data => {
            res.locals.articles = data.articles
            // console.log(res.locals.articles)
            // res.locals.articles.forEach(data => {
            //     console.log(data.title)
            // })
            next();
        }).catch(err => {
            next(err);
        });
    },

    // this is going to be for the datbase view
    // show all the articles that have been added
    index(req, res, next) {
        db.findAll()
            .then(data => {
                res.locals.articles = data;
                next();
            })
            .catch(err => {
                next(err);
            });
    },

    show(req, res, next) {
        db.findOne()
            .then(data => {
                res.locals.article = data;
            })
            .catch(err => {
                next(err);
            });
    },

    create(req, res, next) {
        db.handleSubmit(req.body)
            .then(article => {
                // grab the informatio from the post to send into the db
                res.locals.article = article;
                next();
            })
            .catch(err => {
                next(err);
            });
    },

    destroy(req, res, next) {
        db.destroy(req.params.id)
            .then(() => {

            })
            .catch(err => {
                next(err);
            });
    },

};
