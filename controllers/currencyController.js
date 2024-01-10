const asyncHandler = require('express-async-handler')

const Currency = require('../models/currencyModel')

// @desc    GET - get all currencies
// @route   /api/currencies
// @access  Public
const getAllCurrencies = asyncHandler(async (req, res) => {
  const currencies = await Currency.find()

  const currenciesToSend = currencies.map(({ value, label, desc }) => ({
    value,
    label,
    desc,
  }))

  res.status(200).send(currenciesToSend)
})

module.exports = { getAllCurrencies }
