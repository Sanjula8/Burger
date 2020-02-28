// * In `models`, make a `burger.js` file.

// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

// const orm = require("../config/orm");

// const burger = {
// 	selectAll: async () => {
// 		const response = await orm.selectAll("burgers");
// 		return response;
// 	}
// };

// const burger = {
// 	selectAll: function(cb) {
// 		orm.selectAll("burgers", function(res) {
// 			cb(res);
// 		});
// 	},
// 	insertOne: function(cb) {
// 		orm.insertOne("burgers", function(res) {});
// 	}
// };

module.exports = burger;
