const express = require('express')
const router = express.Router()

const {
  searchRecords,
  getAllRecords,
} = require('../controllers/recordController')

router.get('/', getAllRecords)
router.post('/', searchRecords)

module.exports = router
