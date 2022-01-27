const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345', //비밀번호
    port: 3306,
    database: 'nets_db',
});

db.connect();

module.exports = db;