const asyncHandler = require('express-async-handler')

const Country = require('../models/countryModel')

// @desc    GET - get all countries
// @route   /api/countries
// @access  Public
const getAllCountries = asyncHandler(async (req, res) => {
  const countries = await Country.find()

  res.status(200).send(countries)
})

module.exports = { getAllCountries }
