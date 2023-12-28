// @desc    Find records
// @route   /api/records
// @access  Public
const getRecords = (req, res) => {
  const { x } = req.body

  // Validation
  if (!x) {
    return res.status(400).json({ message: 'Please include all fields' })
  }

  res.send('records route')
}

module.exports = { getRecords }
