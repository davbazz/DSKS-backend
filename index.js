import 'dotenv/config'
import express from 'express'
import pool from './db.js'

const app = express()
const port = process.env.PORT || 8080

app.get('/', async (req,res) => {
    try {
        console.log(req)
      const { rows } = await pool.query(`SELECT * FROM "new_products"`)
      return res.json(rows)
    } catch (error) {
        return res.json({error: error.message})
    }
})

app.listen(port)
