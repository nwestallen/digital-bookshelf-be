
exports.up = knex => {
  return knex.schema
    .createTable('users', table => {
      table.increments('user_id').notNullable().unique().primary();
      table.string('user_name').notNullable().unique();
      table.string('password').notNullable();
      table.timestamps(true, true);
    }); 
};

exports.down = knex =>  {
  return knex.schema.dropTableIfExists('users');
};
