const db = require('../config/dbConfig.js');

module.exports = {

// this shows all users saved data
// this is not being used anywhere
  findAll() {
    return db.many(`
            SELECT *
            FROM articles
        `);
  },
  // this is going to be for the datbase view
  // show all the articles that have been added
  correctedShowAll(id){
      return db.many(`
          SELECT *
          FROM reference
          JOIN articles ON article_id=id
          WHERE user_id = $1
        `, id);
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

  update(article) {
    return db.one(`
            UPDATE articles
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
            RETURNING id
        `, article);
  },

  handleSubmitPartTwo(user_id, article_id) {
    return db.one(`
            INSERT INTO reference (user_id, article_id)
            VALUES (
                ${user_id},
                ${article_id}
            )
            RETURNING *
        `);
  },

  // { username: 'a', password_digest: 'a' }
  findOneUser(username) {
    return db.one(`
            SELECT *
            FROM users
            WHERE username = '${username}'
        `);
  },

  saveUser(user) {
    return db.one(`
            INSERT INTO users (username, password_digest, email, firstname, lastname)
            VALUES (
                $/username/,
                $/password_digest/,
                $/email/,
                $/firstname/,
                $/lastname/
            )
            ON CONFLICT (username) DO UPDATE
            SET
            username = $/username/,
            password_digest = $/password_digest/,
            email = $/email/,
            firstname = $/firstname/,
            lastname = $/lastname/
            RETURNING *
        `, user);

  },
}
