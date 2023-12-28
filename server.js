const express = require('express')
require('dotenv').config()
require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// connect to database
connectDB()

const app = express()

app.use(express.json())

// Routes
app.get('/api/records', (req, res) => {
  res.status(201).json({ message: 'Hello' })
})

app.use('/api/records', require('./routes/recordRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
