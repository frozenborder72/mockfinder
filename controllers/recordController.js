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
  const { currency, routingType } = req.body
  // const { x } = req.body

  // // Validation
  // if (!x) {
  //   res.status(400)
  //   throw new Error('Please include all fields')
  // }

  const records = await Record.find({ ...req.body })

  res.send(records)
})

module.exports = { getAllRecords, searchRecords }
