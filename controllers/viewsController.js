module.exports = {

    // showAll(req, res) {
    //     res.render('home', {
    //         data: res.locals.books
    //     })
    // },

    // showOne(req, res) {
    //     res.send(res.locals.book);
    // },

    showArticle(req, res) {
        console.log('my dattttttaaaaaaaaa', res.locals.articles)
        res.render('home', {
            data: res.locals.articles
        })
    },

};
