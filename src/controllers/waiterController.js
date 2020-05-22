const router = require('express').Router()
const knex = require('../database')

router.post("/",async (req,res,next) =>{

    try {
        const {order ,tableNumber} = req.body
        await knex('orders').insert({
            order,
            tableNumber
        })
        return res.status(201).send("send with sucess")
    } catch (error) {
        next(error)
    }
})  

module.exports = router