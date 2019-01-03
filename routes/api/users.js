const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public
router.get('/test', (req, res) => {
  // output json, automatically gives status 200
  res.json({ msg: 'Users Works' });
});

module.exports = router;
