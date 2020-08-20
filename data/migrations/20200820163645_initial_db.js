
exports.up = function(knex) {
  return knex.schema.createTable('books', table=>{
    table.increments('id')
    table.string('name').notNullable()
    table.string('author').notNullable()
  }).createTable('highlights', table =>{
    table.increments('id');
    table.text('highlite');
    table.integer('book_id')
      .unsigned()
      .notNullable()
      .references('books.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('highlights')
    .dropTableIfExists('books')
};
