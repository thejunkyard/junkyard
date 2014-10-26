var express = require('express');
var router = express.Router();

var Post = require('../models/post');


// Return a list of the most recent posts
router.get('/',function(req, res) {
  Post.find().sort('-date').limit(10).exec(function(err, posts) {
    res.json({posts: posts});
  });
});

// Return a random post
router.get('/random',function(req, res) {
  Post.find().sort('date').limit(1).exec(function(err, post) {
    res.json({ post: post[0] });
  });
});

// Return a specific post
router.get('/:id',function(req, res) {
  Post.find({id:req.query.id}).exec(function(err, post) {
    res.json({ post: post[0] });
  });
});

// Create a new post
router.post('/',function(req, res) {
  var post = new Post({
    name: req.body.name,
    content: req.body.content
  });

  post.save(function(err) {
    res.json({
      cooldown: 3 * 60 * 1000, // 3m cooldown
      post: post
    })
  });
});

module.exports = router;