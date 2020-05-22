const express = require('express')
const app = express()

const kitchenController = require('./controllers/kicthenController')
const waiterController = require('./controllers/waiterController')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/send", waiterController)
app.use("/orders", kitchenController)

app.use((error,req,res,next) =>{
    res.status(error.status || 500)
})

app.listen('8000')