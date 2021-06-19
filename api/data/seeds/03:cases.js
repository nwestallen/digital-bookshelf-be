
exports.seed = knex =>  {
  // Deletes ALL existing entries
  return knex('cases').del()
    .then(() => {
      // Inserts seed entries
      return knex('cases').insert([
        {lib_order: 1, user_id: 1},
        {lib_order: 2, user_id: 1},
        {lib_order: 1, user_id: 2}
      ]);
    });
};
