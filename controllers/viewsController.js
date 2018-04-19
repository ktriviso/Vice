module.exports = {

    // this is going to be for the datbase view
    // show all the articles that have been added
    showAll(req, res) {
        res.render('database', {
            data: res.locals.articles
        })
    },

    showOne(req, res) {
        res.render('single', {
            data: res.locals.article
        })
    },

    // this is for the homepage
    showArticle(req, res) {
        res.render('home', {
            data: res.locals.articles
        })
    },

    // if you change, edit or delete, just go back to the database
    handleCreate(req, res) {
        res.redirect('/')
    },

    handleDelete(req, res) {
        res.redirect('/database')
    },

};
