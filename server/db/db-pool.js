const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'deploy',
  database: 'jshub',
  password: 't4jn3h4slo',
  connectionLimit: 10,
  enableKeepAlive: true,
});

module.exports = pool;