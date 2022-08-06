require('dotenv').config();
const mysql = require( 'mysql-await' );

const mysql_conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USS,
  password: process.env.MYSQL_PSS,
  database: process.env.MYSQL_BD,
});

mysql_conn.on(`error`, (err) => {
  console.error(`Connection error ${err.code}`);
});

module.exports = mysql_conn