const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const WhiteList = new Schema({
  wladdress: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

// Create model for todo
const WLAddr = mongoose.model('wlAddr', WhiteList);

module.exports = WLAddr;