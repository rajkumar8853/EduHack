const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rajkumar-2005',  
    database: 'ticket_raise'
});

module.exports = db;
