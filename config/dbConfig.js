const pg = require('pg-promise')();
const config = {
  host: 'localhost',
  port: 5432,
  database: 'vice_db'
}
const db = pg(config);

module.exports = db;
