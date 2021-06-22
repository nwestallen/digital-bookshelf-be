const db = require('../data/db-config');

const getByUser = user_id => {
  return db('books').where({user_id})
};

module.exports = {
  getByUser,
};