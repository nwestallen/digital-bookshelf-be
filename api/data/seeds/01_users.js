
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'nwestallen', password: 'asdflkjha'},
        {user_name: 'chrissyboy', password: 'ffffffff'},
      ]);
    });
};
