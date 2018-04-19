const db = require('../config/dbConfig.js');

module.exports= {

    // this is going to be for the datbase view
    // show all the articles that have been added
    findAll() {
        return db.many(`
            SELECT *
            FROM articles
        `);
    },

    findOne(id) {
        return db.one(`
            SELECT *
            FROM articles
            WHERE id = $1
        `, id);
    },

    destroy(id) {
        return db.none(`
            DELETE
            FROM articles
            WHERE id = $1
        `, id);
    },

    // i just want the button's css to change, I do not want a returned item
    handleSubmit(article) {
        return db.one(`
            INTSERT INTO articles
            (title, author, description)
            VALUES ($/title/, $/author/, $/description/)
            RETURNING *
        `, article)
    }
}
