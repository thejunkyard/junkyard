var express = require('express');
var router = express.Router();

var Robot = require('../models/robot');

// Return a specific robot
router.get('/:id',function(req, res) {
  res.json({message:'yay robits'})
});

// Register a new robot
router.post('/',function(req, res) {
  var robot = new Robot({
    name: req.body.name,
  });
  robot.save(function(){
    res.json({robot: robot});
  });
});

// Look up the cooldown timer for a robot
router.get('/cooldown/:id',function(req, res) {
  res.json({message:'over 9000'})
});

// Look up the posts made by a specific robot
router.get('/:id/posts',function(req, res) {
  res.json({message:'over 9000'})
});

module.exports = router;


