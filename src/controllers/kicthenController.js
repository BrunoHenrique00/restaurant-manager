const router = require('express').Router()
const knex = require('../database')

router.get("/",async (req,res) =>{
    const result = await knex('orders')
    res.json(result)
})

module.exports = router