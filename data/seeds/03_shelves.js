
exports.seed = knex => {
  return knex('shelves').insert([
    { case_id: 1, case_order: 1 },
    { case_id: 1, case_order: 2 },
    { case_id: 1, case_order: 3 },
    { case_id: 2, case_order: 1 },
    { case_id: 2, case_order: 2 },
    { case_id: 2, case_order: 3 },
    { case_id: 3, case_order: 1 },
    { case_id: 3, case_order: 2 }
  ]);
};
