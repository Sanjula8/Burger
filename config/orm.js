// Importing MySQL Connection:
const connection = require("./connection.js");

const orm = {
	// Select All:
	selectAll: function(cb) {
		var query = "SELECT * FROM burgers;";
		connection.query(query, function(err, res) {
			if (err) {
				throw err;
			}
			// console.log("ERR:", err);
			cb(res);
		});
	},

	// Insert One
	insertOne: function(burger, devour, cb) {
		var query = "INSERT INTO burgers (burgerName) VALUES (?)";
		connection.query(query, burger, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	// Update One
	updateOne: function(id, cb) {
		var query = "UPDATE burgers SET devoured = true WHERE id = " + id;
		connection.query(query, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	// Delete One
	deleteOne: function(id, cb) {
		var query = "DELETE FROM burgers WHERE id = " + id;
		connection.query(query, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	}
};

module.exports = orm;
