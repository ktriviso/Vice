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
            console.log('this is the dataaaa', data)
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
        db.findOne(req.params.id)
            .then(data => {
                res.locals.article = data;
                next();
            })
            .catch(err => {
                next(err);
            });
    },

    update(req, res, next) {
        // you need to have this since the user doesnt have access
        req.body.id = req.params.id
        db.update(req.body)
            .then(article => {
                res.locals.article = article;
                next();
            })
            .catch(err => {
                next(err);
            })
    },

    create(req, res, next) {
        // do i have to do something to the body??
        // req.body ==== article param in the dbModels.create
        db.handleSubmit(req.body)
            .then(article => {
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
                next();
            })
            .catch(err => {
                next(err);
            });
    },

    login(req, res, next) {
        db.saveUser(req.body)
            .then(user => {
                res.locals.user = user;
                next();
            })
            .catch(err => {
                next(err);
            });
    },

};
