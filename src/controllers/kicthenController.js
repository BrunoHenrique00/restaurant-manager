const router = require('express').Router()
const knex = require('../database')

router.get("/",async (req,res) =>{
    const result = await knex('orders')
    res.json(result)
})

router.delete("/:id", async (req,res) =>{
    try {
        const { id } = req.params
        await knex('orders')
        .where({ id })
        .del()

        return res.send(`Pedido ${id} deletado com sucesso!`)
    } catch (error) {
        next(error)
    }
})

module.exports = router