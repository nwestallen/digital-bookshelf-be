const db = require('../data/db-config');

const findBy = filter => {
  return db('books').where(filter)
};


module.exports = {
  findBy,
};