const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// connect to database
connectDB()

const app = express()

app.use(cors())

app.use(express.json())

// Routes
app.use('/api/records', require('./routes/recordRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
