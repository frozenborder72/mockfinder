const asyncHandler = require('express-async-handler')

const Currency = require('../models/currencyModel')

// @desc    GET - get all currencies
// @route   /api/currencies
// @access  Public
const getAllCurrencies = asyncHandler(async (req, res) => {
  const currencies = await Currency.find()

  res.status(200).send(currencies)
})

module.exports = { getAllCurrencies }
