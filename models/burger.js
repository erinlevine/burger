// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export at the end of the burger.js file.

var orm = require("../config/orm.js");


var burger = {
	selectAll: function(cb){
		//"burgers" = tableInput
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertOne: function(object, cb){
		//"burgers" = tableInput
		//object is the new burger being added by user
		orm.insertOne("burgers", object, function(res){
			cb(res);
		});
	},

	updateOne: function(whatToUpdate, whereToUpdate, cb){
		//"burgers" = tableInput
		//whatToUpdate and whereToUpdate are both objects
		orm.updateOne("burgers", whatToUpdate, whereToUpdate, function(res){
			cb(res);
		});
	}


};
module.exports = burger;