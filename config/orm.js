// 3. Create an `orm.js` file inside `config` directory.

//    * Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

//    * Export the ORM object in `module.exports`.

// Importing MySQL Connection:
const connection = require("./connection.js");

// Select All:

const orm = {
	selectAll: function() {
		var query = "SELECT * FROM burgers";
		connection.query(query, function(err, res) {
			if (err) throw err;
			console.log(res);
		});
	},

	insertOne: function() {
		var query = "INSERT INTO burgers (burger_name, devour) VALUES (? , ?)";
		connection.query(query, function(err, res) {
			if (err) throw err;
			console.log(res);
		});
	},

	updateOne: function() {}
};
