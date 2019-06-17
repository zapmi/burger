// Import MySQL connection.
var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)
var orm = {
    selectAll: function (callback) {
        var selectA = "SELECT * FROM ??";

        connection.query(selectA, function (err, result) {

            callback(result);

        });
    },

    insertOne: function (burger, callback) {
        var insertO = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?)";
        // burger.complete = burger.complete || 0;
        connection.query(insertO, [
            burger.burger_name, burger.devoured
        ], function (err, result) {

            callback(result);

        });
    },

    updateOne: function (burger, callback) {
        var updateO = "UPDATE ?? SET burger_name=?, devoured=? WHERE id=?";

        connection.query(updateO, [
            burger.burger_name, burger.devoured, burger.id
        ], function (err, result) {

            callback(result);

        });
    }
};

module.exports = orm;
