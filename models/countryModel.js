const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  isoCode: {
    type: String,
    required: true,
  },
  riskClassification: {
    type: Number,
    required: false,
  },
  sepaPartecipant: {
    type: Boolean,
    required: true,
  },
})

module.exports = mongoose.model('country', countrySchema)
