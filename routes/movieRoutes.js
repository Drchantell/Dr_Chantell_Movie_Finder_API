const express = require("express");
const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController");

const router = express.Router();

// Search for movies by title.
router.get("/search", searchMovies);

// Find one movie by its IMDb ID.
router.get("/movies/:id", getMovieDetails);

module.exports = router;
