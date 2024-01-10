const express = require('express')
const router = express.Router()

const { getAllCurrencies } = require('../controllers/currencyController')

router.get('/', getAllCurrencies)

module.exports = router
