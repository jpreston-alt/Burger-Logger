// require orm object
const orm = require("../config/orm");

// set up burger object using orm methods specific to burger object. sets up methods to interact with the database.

let burger = {

    // select all burgers
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    // insert new burger into burgers table
    insertOne: function(burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, cb, function(res) {
            cb(res);
        });
    },

    // update devoured column to eaten -> default (false) to true
    updateDevoured: function(eatenBoolean, burgerName, cb) {
        orm.updateOne("burgers", "devoured", eatenBoolean, "burger_name", burgerName, cb, function(res) {
            cb(res);
        });
    }
};

// export burger object and methods
module.exports = burger;




// TEST BURGER METHODS

// burger.insertOne("Egg Burger", function(result) {
//     console.log(result);
//     burger.selectAll(res => {
//         console.table(res);
//     });
// });

// burger.updateDevoured(true, "Egg Burger", result => {
//     console.log(result);
//     burger.selectAll(res => {
//         console.table(res);
//     });
// });

// burger.selectAll(result => {
//     console.table(result);
// });

