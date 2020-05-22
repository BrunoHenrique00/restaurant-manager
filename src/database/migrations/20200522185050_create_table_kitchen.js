
exports.up = function(knex) {
    return knex.schema.createTable('orders', function(table){
        table.increments('id')
        table.text('order').notNullable()
        table.integer('tableNumber').notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders')
};
