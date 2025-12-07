const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: String,
  genre: [String],
  releaseYear: Number,
  rating: Number,
  description: String,
  isMovie: Boolean
});

module.exports = mongoose.model("Movie", MovieSchema);
