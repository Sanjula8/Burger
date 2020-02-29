// Create the `router` for the app, and export the `router` at the end of your file.

// Require express and orm file:
const express = require("express");
const router = express.Router();
const orm = require("../config/orm");

// const burger = require("../models/burger")

router.get("/", function(req, res) {
	orm.selectAll(function(data) {
		console.log(data);
		var object = {
			burgers: data
		};
		// console.log(err);
		res.render("index", object);
	});
});

router.post("/burgers/create", function(req, res) {
	orm.insertOne(req.body.name, false, function(data) {
		console.log(data);
		res.redirect("/");
	});
});

router.put("/burgers/:id", function(req, res) {
	orm.updateOne(req.params.id, function(data) {
		res.sendStatus(200);
	});
});

router.delete("/burgers/:id", function(req, res) {
	orm.deleteOne(req.params.id, function(data) {
		res.sendStatus(200);
	});
});

module.exports = router;
