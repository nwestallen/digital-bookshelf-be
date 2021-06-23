
exports.seed = knex =>  {
  return knex('cases').insert([
    { lib_order: 1, user_id: 1},
    { lib_order: 2, user_id: 1},
    { lib_order: 1, user_id: 2}
  ]);
};
