// db.js

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'icrudinventry',
  connectionLimit: 10, // Adjust this value based on your requirements
});

const connection = pool.promise();

module.exports = connection;
