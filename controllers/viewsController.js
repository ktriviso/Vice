module.exports = {

    showAll(req, res) {
        res.render('home', {
            data: res.locals.books
        })
    },

    // showOne(req, res) {
    //     res.send(res.locals.book);
    // }

};
