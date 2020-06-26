/* eslint-disable linebreak-style */
const connection = require('./connection');

const orm = {
  selectAll: (cb) => {
    const queryString = 'SELECT * FROM burgers;';
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (inputs, cb) => {
    const queryString = 'INSERT INTO burgers (burger_name) VALUES (?);';
    connection.query(queryString, inputs, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (inputs, cb) => {
    const queryString = 'UPDATE burgers SET devoured = true WHERE id = ?;';
    connection.query(queryString, inputs, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: (inputs, cb) => {
    const queryString = 'DELETE FROM burgers WHERE id = ?';
    connection.query(queryString, inputs, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
