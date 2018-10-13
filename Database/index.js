var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'bookatrip'
});

connection.connect(err => {
    if (err) { throw err }
    console.log('DATABASE CONECTED>>>');
})

module.exports.connection = connection;