const connection = require('./connection');

const orm = {
    selectAll: function (cb) {
        let burgerQuery = 'SELECT * FROM burgers';

        connection.query(
            burgerQuery,

            function (err, data) {
                if (err) throw err;

                cb(data);
            }
        )
    },

    insertOne: function(col, val, cb) {
        let burgerQuery = `INSERT INTO burgers (${col}) VALUES (?)`;

        connection.query(
            burgerQuery,

            val,

            function (err, data) {
                if (err) throw err;

                cb(data)
            }
        )
    },

    updateOne: function(val, id, cb) {
        let burgerQuery = `UPDATE burgers SET devoured=${val} WHERE id = ${id}`;

        connection.query(
            burgerQuery,
            function (err, data) {
                if (err) throw err;

                cb(data);
            }
        )
    }
}

module.exports = orm;