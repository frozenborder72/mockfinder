const express = require('express')
const router = express.Router()

const { getRecords } = require('../controllers/recordController')

router.post('/', getRecords)

module.exports = router
