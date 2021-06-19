
exports.up = knex => {
  return knex.schema
    .createTable('cases', table => {
      table.increments('case_id').notNullable().unique().primary();
      table.integer('lib_order').notNullable();
      table.integer('user_id')
        .notNullable()
        .references('user_id')
        .inTable('users');
    });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('cases');
};
