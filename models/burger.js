var orm = require("../config/orm");

var burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (cb) {
        orm.insertOne("burgers", "burger_name", "devoured", function (res) {
            cb(res);
        });
    },
    updateOne: function (cb) {
        orm.updateOne("burgers", "burger_name", "devoured", "id", function (res) {
            cb(res);
        });
    },


};



module.exports = burger;
