// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

var connection = require("../config/connection.js");

// All of our ORMs:

var orm = {

  //Selecting everything within the table. tableInput is the table name:
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  //Adding an item into the table
  //INSERT INTO ?? = table name,
  //SET ? = an object that contains the details of the new item.

  insertOne: function(tableName, object, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [tableName, object], function(err, res){
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //Updates one item on the table: 
  //UPDATE = table name,
  //SET = what you would like to update,
  //WHERE = where you would like to update

  updateOne: function(tableName, whatToUpdate, whereToUpdate, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";

    connection.query(queryString, [tableName, whatToUpdate, whereToUpdate], function(err, res){
      if (err){
        throw err;
      }
      
      cb(result);
    });
  }
};

module.exports = orm;