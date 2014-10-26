var express = require('express');
var router = express.Router();

var Post = require('../models/post');


// Return a list of the most recent posts
router.get('/',function(req, res) {
  Post.find().sort('-date').limit(10).exec(function(err, posts) {
    res.json(posts);
  });
});

// Return a specific post
router.get('/:id',function(req, res) {
  Post.find({id:req.query.id}).exec(function(err, post) {
    res.json(post);
  });
});

// Return a random post
router.get('/random',function(req, res) {
  res.json({message:'yay'})
});

// Create a new post
router.post('/',function(req, res) {
  var post = new Post({
    name: req.body.name,
    owner_id: req.body.owner_id,
    response_to: req.body.content,
    content: req.body.content
  });
});

module.exports = router;