const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const connectDB = require('./db/connectDb')
dotenv.config()

const app = express()

//middleware
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173'
}))

// routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/posts', require('./routes/postRoutes'));



const PORT = 8000

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});