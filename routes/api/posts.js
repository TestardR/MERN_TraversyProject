const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');

// Valiadation

// @route   GET api/posts/test
// @desc    Tests posts route
// @access  Public
router.get('/test', (req, res) => {
  // output json, automatically gives status 200
  res.json({ msg: 'Posts Works' });
});

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.name,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
