// 3. Create an `orm.js` file inside `config` directory.

//    * Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`
//      * `deleteOne()`

//    * Export the ORM object in `module.exports`.

// Importing MySQL Connection:
const connection = require("./connection.js");

// Select All:

const orm = {
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

	insertOne: function(burger, devour, cb) {
		var query = "INSERT INTO burgers (burgerName) VALUES (?)";
		connection.query(query, burger, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	updateOne: function(id, cb) {
		var query = "UPDATE burgers SET devoured = true WHERE id = " + id;
		connection.query(query, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

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
