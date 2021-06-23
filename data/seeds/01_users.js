
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE table users RESTART IDENTITY CASCADE')
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        { user_name: 'nwestallen', password: 'asdflkjha' },
        { user_name: 'chrissyboy', password: 'ffffffff' },
      ]);
    });
};
