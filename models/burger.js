const orm = require('../config/orm');

const burger = {
  selectAll(cb) {
    orm.selectAll((data) => {
      cb(data);
    });
  },

  insertOne(burgers, nameVal, cb) {
    orm.insertOne(burgers, nameVal, (results) => {
      cb(results);
    });
  },

  updateOne(val, id, cb) {
    const { devoured } = val;

    orm.updateOne(devoured, id, (res) => {
      cb(res);
    });
  },

  deleteOne(id, cb) {
    orm.deleteOne(id, (confirm) => {
      cb(confirm);
    });
  },
};

module.exports = burger;
