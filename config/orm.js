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

    insertOne:
}