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

    handleUpdate(req, res) {
        let id = req.params.id
        res.redirect(`/database/single/${id}`)
    },

    // if you change, edit or delete, just go back to the database
    handleCreate(req, res) {
        res.redirect('/')
    },

    handleDelete(req, res) {
        res.redirect('/database')
    },

    showEditForm(req, res) {
        res.render('edit', {
            data: res.locals.article
        })
    },

    showAddForm(req, res) {
        res.render('add')
    },

};
