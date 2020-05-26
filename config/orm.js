// require mysql connection
const connection = require("./connection");

// create orm object
const orm = {

    // select all from table
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM ??;", [table], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    // insert into table
    insertOne: function (table, columns, colVals, cb) {
        connection.query('INSERT INTO ?? (??) VALUES (?);', [table, columns, colVals], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    // update instance in table
    updateOne: function (table, setCol, setColVal, whereCol, whereColVal, cb) {
        connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?;', [table, setCol, setColVal, whereCol, whereColVal], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

// orm.selectAll("burgers", function(result) {
//     console.log(result);
// });

// orm.insertOne("burgers", "burger_name", "Bacon Burger", function(result) {
//     console.log(result);
// });

// orm.updateOne("burgers", "devoured", true, "burger_name", "Impossible Burger", function(result) {
//     console.log(result);
// });

// export orm
module.exports = orm;

