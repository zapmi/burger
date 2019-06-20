
var connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


// Object Relational Mapper (ORM)
var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }

    // selectAll: function (tableInput, cb) {
    //     var queryString = "SELECT * FROM ??";
    //     connection.query(queryString, [tableInput], function (err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         cb(result);
    //     });
    // }
    // insertOne: function (tableInput, colName, valueObj, cb) {
    //     var queryString = "INSERT INTO ?? (?) VALUES ('?')";
    //     connection.query(queryString, [
    //         tableInput, colName, valueObj
    //     ], function (err, result) {
    //         if (err) throw err;
    //         cb(result);

    //     });
    // }

    // insertOne: function (burger, cb) {
    //     var insertO = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?)";
    //     // burger.complete = burger.complete || 0;
    //     connection.query(insertO, [
    //         burger.burger_name, burger.devoured
    //     ], function (err, result) {

    //         cb(result);

    //     });
    // },
    // create: function (table, cols, vals, cb) {
    //     var queryString = "INSERT INTO " + table + "(burger_name, devoured) VALUES (?,?)";

    //     queryString += " (";
    //     queryString += cols.toString();
    //     queryString += ") ";
    //     queryString += "VALUES (";
    //     queryString += printQuestionMarks(vals.length);
    //     queryString += ") ";

    //     console.log(queryString);

    //     connection.query(queryString, vals, function (err, result) {
    //         if (err) {
    //             throw err;
    //         }

    //         cb(result);
    //     });
    // },

    // updateOne: function (burger, cb) {
    //     var updateO = "UPDATE ?? SET burger_name=?, devoured=? WHERE id=?";

    //     connection.query(updateO, [
    //         burger.burger_name, burger.devoured, burger.id
    //     ], function (err, result) {

    //         cb(result);

    //     });
    // },
    // updateOne: function (table, objColVals, condition, cb) {
    //     var queryString = "UPDATE " + table;

    //     queryString += " SET ";
    //     queryString += objToSql(objColVals);
    //     queryString += " WHERE ";
    //     queryString += condition;

    //     console.log(queryString);
    //     connection.query(queryString, function (err, result) {
    //         if (err) {
    //             throw err;
    //         }

    //         cb(result);
    //     });
    // }
};

module.exports = orm;