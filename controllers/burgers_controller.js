const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

// GET ROUTE
router.get("/", function(req, res) {
    burger.selectAll(data => {
        let burgers = { burgerInst: data};
        res.render("index", burgers);
    });
});

// INSERT ROUTE
router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, result => {
        res.json({ id: result.insertId });
    });
});

// UPDATE ROUTE
router.put("/api/burgers/:id", function (req, res) {
    let burgerID = req.params.id;

    burger.updateDevoured(true, burgerID, result => {
        res.json({ id: result.insertId });
    });
});

module.exports = router;