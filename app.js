const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

//middleware
app.use(express.json())

// routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

app.get('/', (req, res) => {
    res.send('Blog Api is running ....')
})

const PORT = process.env.port || 5000

app.listen(PORT,() => console.log(`Sever is runngin on port ${PORT}`))