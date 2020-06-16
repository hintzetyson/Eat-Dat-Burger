const orm = require ("../config/orm");

const burger = {
    selectAll: function(cb) {
        orm.selectAll(function(data) {
            cb(data)
        });
    },

    insertOne: function(burgers, nameVal, cb) {
        orm.insertOne(burgers, nameVal, function(results) {
            cb(results)
        })
    },

    updateOne: function(val, id, cb) {
        let devoured = val.devoured;

        orm.updateOne(devoured, id, function(res) {
            cb(res)
        });
    },

    deleteOne: function(id, cb) {
        orm.deleteOne(id, (confirm) => {
            cb(confirm)
        });
    }
};

module.exports = burger;