var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true
  },
  response_to: {
    type: mongoose.Schema.Types.ObjectId,
    index: true
  },
  content: String
});

module.exports = mongoose.model('Post', PostSchema);