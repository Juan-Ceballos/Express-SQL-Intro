const express = require('express')
const app = express()
const db = require('./db')
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const results = await db.query('SELECT NOW()')
        res.json(results.rows)
    } catch(err) {
        console.error('Error executing query', err.stack)
        res.status(500).send('Database query failed')
    }
})

app.get('/users', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM users')
        res.json(results.rows)
    } catch(err) {
        console.error('Error executing query', err.stack)
        res.status(500).send('Failed to get users')
    }
})

app.get('/users/:id', async (req, res) => {
    const { id } = req.params
    try {
        const results = await db.query('SELECT * FROM users WHERE id = $1', [id])
        if (results.rows.length > 0) {
            res.json(results.rows[0])
        } else {
            res.status(404).send('User not found')
        }
    } catch(err) {
        console.error('Error executing query', err.stack)
        res.status(500).send('Failed to get user')
    }
})

app.post('/users', async (req, res) => {
    const {name, email} = req.body
    try {
        const results = await db.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email])
        res.status(201).json(results.rows[0])
    } catch(err) {
        console.error('Error executing query', err.stack)
        res.status(500).send('Failed to add user')
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})