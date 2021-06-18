
exports.up = knex => {
  return knex.schema
    .createTable('cases', table => {
      table.increments('case_id').notNullable().unique().primary();
      table.integer('lib_order').notNullable();
    });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('case');
};
