const db = require('../models/dbModels.js');

module.exports = {

    index(req, res, next) {
        db.findAll()
            .then(data => {
                res.locals.books = data;
                next();
            })
            .catch(err => {
                next(err);
            })
    },
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
