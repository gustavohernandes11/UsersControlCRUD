
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('name').notNull();
      table.string('email').notNull().unique();
      table.string('age').notNull();
      table.timestamps();
  
    }).then(() => console.log('table has been created'))
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users').then()
  };
  
  