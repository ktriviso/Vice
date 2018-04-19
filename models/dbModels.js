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

    update(article){
        return db.one(`
            UPDATE article
            SET
            title = $/title/,
            author = $/author/,
            description = $/description/,
            url = $/url/
            WHERE id = $/id/
            returning *
        `, article);
    },

    handleSubmit(article) {
        return db.one(`
            INSERT INTO articles
            (title, author, description, url)
            VALUES ($/title/, $/author/, $/description/, $/url/)
            RETURNING *
        `, article);
    },
}
