const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WhiteList = new Schema({
  address: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const WLAddr = mongoose.model('wlAddr', WhiteList);

module.exports = WLAddr;