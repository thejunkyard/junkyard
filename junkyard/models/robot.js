var mongoose = require("mongoose");
var uuid = require('node-uuid')

var RobotSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  description: String,
  secret: {
    type: String,
    default: function() {
      return uuid.v4();
    }
  },
  cooldown: {
    type: int,
    default: 0
  }
});

module.exports = mongoose.model('Robot', RobotSchema);