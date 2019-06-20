var orm = require("../config/orm.js");

var burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    }
    // insertOne: function (tableInput, colName, valueObj, cb) {
    //     orm.insertOne(tableInput, colName, valueObj, function (res) {
    //         cb(res);
    //     });
    // },
    // updateOne: function (cb) {
    //     orm.updateOne("burgers", "burger_name", "devoured", "id", function (res) {
    //         cb(res);
    //     });
    // },


};



module.exports = burger;
