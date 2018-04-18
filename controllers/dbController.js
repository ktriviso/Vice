const db = require('../models/dbModels.js');

module.exports = {

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
            next();
        }).catch(err => {
            next(err);
        })
    }




    // index(req, res, next) {
    //     db.findAll()
    //         .then(data => {
    //             res.locals.books = data;
    //             next();
    //         })
    //         .catch(err => {
    //             next(err);
    //         })
    // },
    //
    // show(req, res, next) {
    //     db.findOne()
    //         .then(data => {
    //             res.locals.book = data;
    //         })
    //         .catch(err => {
    //             next(err);
    //         })
    // },

};
