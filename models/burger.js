var orm = require("./config/orm.js");

var burger = {

    selectAll: function (cb) {
        orm.selectAll("parties", function (res) {
            cb(res);
        });
    },
    insertOne: function (cb) {
        orm.insertOne("parties", "burger_name", "devoured", function (res) {
            cb(res);
        });
    },
    updateOne: function (cb) {
        orm.updateOne("parties", "burger_name", "devoured", "id", function (res) {
            cb(res);
        });
    },


};
module.exports = burger;
