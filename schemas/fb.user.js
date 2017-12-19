const mongoose = require('../configs/mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
  facebookID: Number,
  displayName: String,
  gender: String
});