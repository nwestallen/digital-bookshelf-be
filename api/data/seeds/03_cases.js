
exports.seed = knex =>  {
  // Deletes ALL existing entries
  return knex('cases').del()
    .then(() => {
      // Inserts seed entries
      return knex('cases').insert([
        {case_id: 1, lib_order: 1, user_id: 1},
        {case_id: 2, lib_order: 2, user_id: 1},
        {case_id: 3, lib_order: 1, user_id: 2}
      ]);
    });
};
