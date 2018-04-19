module.exports = {

    // this is going to be for the datbase view
    // show all the articles that have been added
    showAll(req, res) {
        res.send(res.locals.articles);
    },

    showOne(req, res) {
        res.send(res.locals.article);
    },

    // this is for the homepage
    showArticle(req, res) {
        res.render('home', {
            data: res.locals.articles
        })
    },

    // if you change, edit or delete, just go back to the database
    handleCreate(req, res) {
        res.redirect('/database')
    },

    handleDelete(req, res) {
        res.redirect('/database')
    },

};
