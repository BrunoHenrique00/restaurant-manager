const knex = require('../database')

module.exports = async (socket) =>{
    const orders = await knex('orders')
    socket.emit('initialOrders', orders)
    socket.on('sendOrder', async data =>{
        socket.broadcast.emit('newOrder', data)
    })
}