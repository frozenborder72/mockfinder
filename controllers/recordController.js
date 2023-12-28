const asyncHandler = require('express-async-handler')

// @desc    Find records
// @route   /api/records
// @access  Public
const getRecords = asyncHandler(async (req, res) => {
  const { x } = req.body

  // Validation
  if (!x) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  res.send('records route')
})

module.exports = { getRecords }
