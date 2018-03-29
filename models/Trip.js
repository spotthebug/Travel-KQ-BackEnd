var mongoose = require('mongoose');

var TripSchema = new mongoose.Schema({
  country: String,
  city: String,
  comments: String,
  travel_year: Number,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trip', TripSchema);
