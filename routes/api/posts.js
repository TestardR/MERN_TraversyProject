const express = require('express');
const router = express.Router();

// @route   GET api/posts/test
// @desc    Tests posts route
// @access  Public
router.get('/test', (req, res) => {
  // output json, automatically gives status 200
  res.json({ msg: 'Posts Works' });
});

module.exports = router;
