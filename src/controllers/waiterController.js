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

router.put("/:id", async (req,res) =>{
    const { id } = req.params
    const { order } = req.body

    await knex('orders')
    .where({ id })
    .update({ order })

    return res.status(201).send(`Order ${id} changed sucessfully!`)
})

module.exports = router