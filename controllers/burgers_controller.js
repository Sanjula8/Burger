// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res) {});

router.post("/", function(req, res) {});

router.put("/:id", function(req, res) {});

module.exports = router;
