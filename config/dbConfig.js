const pg = require('pg-promise')();
const config = {
  host: 'localhost',
  port: 5432,
  database: 'books_server_db'
}
const db = pg(config);

module.exports = db;
