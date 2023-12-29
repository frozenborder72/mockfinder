const asyncHandler = require('express-async-handler')

const Record = require('../models/recordModel')

// @desc    GET - get all records
// @route   /api/records
// @access  Public
const getAllRecords = asyncHandler(async (req, res) => {
  const records = await Record.find()

  res.send(records)
})

// @desc    Find records
// @route   POST - /api/records
// @access  Public
const searchRecords = asyncHandler(async (req, res) => {
  const { currency } = req.body

  const records = await Record.find({ currency })

  res.send(records)
})

module.exports = { getAllRecords, searchRecords }
