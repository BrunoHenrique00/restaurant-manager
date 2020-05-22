
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { order: 'Hamburger and Pizza', tableNumber: 3},
        { order: 'Coke', tableNumber: 1},
        { order: 'Water', tableNumber: 8}
      ]);
    });
};
