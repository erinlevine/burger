// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export at the end of the burger.js file.

var orm = require("./config/orm.js");

// Find all parties, ordering them by party cost.
orm.selectAndOrder("*", "parties", "party_cost");

// Find parties by the name of the party
orm.selectAll("burgers", "party_name", "Everybody Loves Raymond");

// Find clients with the most parties
orm.findWhoHasMost("client_name", "client_id", "clients", "parties");

module.exports = burger;