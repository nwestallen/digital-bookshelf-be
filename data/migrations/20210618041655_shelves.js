
exports.up = knex => {
  return knex.schema
  .createTable('shelves', table => {
    table.increments('shelf_id').unique().notNullable().primary();
    table.integer('case_order').notNullable();
    table.integer('case_id')
      .notNullable()
      .references('case_id')
      .inTable('cases')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('shelves');
};
