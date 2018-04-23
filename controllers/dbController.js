const db = require('../models/dbModels.js');
const bcrypt = require('bcrypt');

module.exports = {

    // this is the api call
    data(req, res, next) {
        const NewsAPI = require('newsapi');
        const newsapi = new NewsAPI(process.env.API_KEY);

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

    // showUser(req, res, next) {
    //     db.findOneUser(req,params.id)
    //         .then(data => {
    //             res.locals.user = user;
    //             next();
    //         })
    //         .catch(err => {
    //             next(err);
    //         });
    // },

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

    // this is the handle submit
    create(req, res, next) {
        db.handleSubmit(req.body)
            .then(article => {
                res.locals.article = article;
                next();
            })
            .catch(err => {
                next(err);
            });
    },

    createReference(req, res, next) {
        console.log('im inside the create reference', req.session.userID)
        console.log('im the article id: ', res.locals.article.id)
        debugger;
        db.handleSubmitPartTwo(req.session.userID, res.locals.article.id)
        .then(() => {
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

    async newUser(req, res, next) {
        req.body.password_digest = await bcrypt.hash(req.body.password, 5);
        db.saveUser(req.body)
            .then(user => {
                res.locals.user = user;
                next();
            })
            .catch(err => {
                next(err);
            });
    },

    async login(req, res, next) {
        try {
            const { username, password_digest } = req.body;
            console.log('mybod', req.body)
            const user = await db.findOneUser(username);
            console.log(password_digest, user.password_digest)
            const valid = await bcrypt.compare(password_digest, user.password_digest);
            console.log(valid)
            if(!valid) {
                throw { message: 'wrong password' }
            }
            req.session.user = user;
            req.session.userID = user.id
            next();
        } catch (err) {
            next(err);
        }
    },

    logout(req, res, next) {
        req.session.destroy(err => next(err));
    },

    loginRequired: [
      (req, res, next) => next(!req.session.user || null),
      (err, req, res, next) => res.sendStatus(401),
    ],

};
