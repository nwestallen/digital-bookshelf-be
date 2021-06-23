
exports.up = knex =>  {
  return knex.schema
    .createTable('books', table => {
      table.increments('book_id').notNullable().unique().primary();
      table.string('book_title').notNullable();
      table.string('book_author');
      table.string('book_color');
      table.string('book_url');
      table.string('isbn');
      table.integer('shelf_order');
      table.integer('user_id')
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer('book_shelf_order');
      table.integer('shelf_id')
        .references('shelf_id')
        .inTable('shelves')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
    });
};

exports.down = knex =>  {
  return knex.schema.dropTableIfExists('books'); 
};
