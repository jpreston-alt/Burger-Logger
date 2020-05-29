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
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// DELETE ROUTE
router.delete("/api/burgers/:id", function (req, res) {
    let burgerID = req.params.id;

    burger.deleteOne(burgerID, result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});


module.exports = router;