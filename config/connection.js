// Set up MySQL connection.
var mysql = require("mysql");

// import login information from .env file
require('dotenv').config({ path: '../.env' });

var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "burgers_db",
});

// Make mysql connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;
