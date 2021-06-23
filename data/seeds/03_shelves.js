
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('shelves').del()
    .then(() => {
      // Inserts seed entries
      return knex('shelves').insert([
        {shelf_id: 1, case_id: 1, case_order: 1},
        {shelf_id: 2, case_id: 1, case_order: 2},
        {shelf_id: 3, case_id: 1, case_order: 3},
        {shelf_id: 4, case_id: 2, case_order: 1},
        {shelf_id: 5, case_id: 2, case_order: 2},
        {shelf_id: 6, case_id: 2, case_order: 3},
        {shelf_id: 7, case_id: 3, case_order: 1},
        {shelf_id: 8, case_id: 3, case_order: 2}
      ]);
    });
};
