// Import MySQL connection.
var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)
var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (tableInput, valueObj, cb) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [
            tableInput, valueObj
        ], function (err, result) {

            cb(result);

        });
    },
    updateOne: function (tableInput, colName, cb) {
        var updateO = "UPDATE ?? SET ?, devoured=? WHERE id=?";

        connection.query(updateO, [
            burger.burger_name, burger.devoured, burger.id
        ], function (err, result) {

            cb(result);

        });
    },

};

module.exports = orm;
