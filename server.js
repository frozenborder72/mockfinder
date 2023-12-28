const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

app.get('/api/records', (req, res) => {
  res.status(201).json({ message: 'Hello' })
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
