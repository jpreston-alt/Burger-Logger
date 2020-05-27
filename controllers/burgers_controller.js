const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

var connection = require("../config/connection");

// GET ROUTE
router.get("/", function(req, res) {
    // console.log("connected!");
    burger.selectAll(result => {
        console.table(result);
    });
});

// INSERT ROUTE
// router.post("/api/burgers", function(req, res) {

// });

// UPDATE ROUTE
// router.put("/api/burgers/:id", function (req, res) {

// });

module.exports = router;