const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// GET ROUTE
router.get("/", function(req, res) {
    burger.selectAll(data => {
        let burgers = { burgerInst: data};
        // console.log(burgers);
        res.render("index", burgers);
    });
});

// INSERT ROUTE
// router.post("/api/burgers", function(req, res) {

// });

// UPDATE ROUTE
// router.put("/api/burgers/:id", function (req, res) {

// });

module.exports = router;