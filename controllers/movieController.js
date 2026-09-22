const axios = require("axios");

const OMDB_URL = "https://www.omdbapi.com/";

// GET /api/search?title=batman
async function searchMovies(req, res) {
  const title = req.query.title;

  if (!title) {
    return res.status(400).json({
      error: "Title query parameter is required",
    });
  }

  try {
    const response = await axios.get(OMDB_URL, {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Movie search error:", error.message);
    res.status(500).json({
      error: "Unable to search for movies right now",
    });
  }
}

// GET /api/movies/tt0372784
async function getMovieDetails(req, res) {
  const movieId = req.params.id;

  try {
    const response = await axios.get(OMDB_URL, {
      params: {
        i: movieId,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Movie details error:", error.message);
    res.status(500).json({
      error: "Unable to get movie details right now",
    });
  }
}

module.exports = {
  searchMovies,
  getMovieDetails,
};
