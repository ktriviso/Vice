const pg = require('pg-promise')();
const config = require('../../../config/dbConfig');

const db = pg(config);

module.exports = {

    save(user) {
        return db.one(`
            INSERT INTO users (username, password_digest, email, firstname, lastname)
            VALUES (
                $/username/,
                $/password_digest/,
                $/email/,
                $/firstname/,
                $/lastname/,
            )
            ON CONFLICT (username) DO UPDATE
            SET
            username = $/username/,
            password_digest = $/password_digest/,
            email = $/email/,
            firstname $/firstname/,
            lastname = $/lastname/,
            RETURNING *
        `, user);

    },

    // update(user) {
    //   return db.one(`
    //     UPDATE users
    //     SET
    //     content = $/content/,
    //     author = $/author/,
    //     genre_type = $/genre_type/
    //     WHERE id = $/id/
    //     RETURNING *
    //   `, user);
    // },



};
