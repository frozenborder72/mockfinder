const mongoose = require('mongoose')

const currencySchema = mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('currency', currencySchema)
