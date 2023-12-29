const mongoose = require('mongoose')

const recordSchema = mongoose.Schema({
  routingType: {
    type: String,
    required: true,
  },
  instructedAgent: {
    type: String,
    required: true,
  },
  intermediaryAgent: {
    type: String,
    required: true,
  },
  senderCorrespondent: {
    type: String,
    required: true,
  },
  receiverCorrespondent: {
    type: String,
    required: true,
  },
  thirdReimbursement: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  creditorAgent: {
    type: String,
    required: true,
  },
  templateToBeUsed: {
    type: String,
    required: true,
  },
  messageType: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('record', recordSchema)
