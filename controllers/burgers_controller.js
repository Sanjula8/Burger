// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

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

// router.post("/", function(req, res) {});

// router.put("/:id", function(req, res) {});

// router.delete("/:id", function (req, res) {})

module.exports = router;
