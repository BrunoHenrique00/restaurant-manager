const express = require('express')
const app = express()
const path = require('path')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const knex = require('./database')

const kitchenController = require('./controllers/kicthenController')
const waiterController = require('./controllers/waiterController')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// SOCKETS **
app.use(express.static(path.join(__dirname,'public')))
app.set('views', path.join(__dirname,'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (req,res) =>{
    res.render('index.html')
})

io.on('connection', async (socket) =>{
    const orders = await knex('orders')
    socket.emit('receivedOrder', orders)
})
// ENDS SOCKETS **

app.use("/send", waiterController)
app.use("/orders", kitchenController)

app.use((error,req,res,next) =>{
    res.status(error.status || 500)
})

server.listen(8000)
