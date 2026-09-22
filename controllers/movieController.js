const axios = require("axios");

const OMDB_URL = "https://www.omdbapi.com/";

// GET /api/search?title=hidden%20figures
async function searchMovies(req, res) {
  const title = req.query.title;
  const apiKey = process.env.OMDB_API_KEY;

  if (!title) {
    return res.status(400).json({
      error: "Title query parameter is required",
    });
  }

  // Stop early when the private key has not been added to .env.
  if (!apiKey) {
    return res.status(500).json({
      error: "OMDb API key is missing. Add it to your .env file.",
    });
  }

  try {
    const response = await axios.get(OMDB_URL, {
      params: {
        s: title,
        apikey: apiKey,
      },
    });

    // OMDb reports problems inside its JSON response.
    if (response.data.Response === "False") {
      return res.status(400).json({
        error: response.data.Error,
      });
    }

    return res.json(response.data);
  } catch (error) {
    console.error("Movie search error:", error.message);
    res.status(500).json({
      error: "Unable to search for movies right now",
    });
  }
}

// GET /api/movies/tt4846340
async function getMovieDetails(req, res) {
  const movieId = req.params.id;
  const apiKey = process.env.OMDB_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "OMDb API key is missing. Add it to your .env file.",
    });
  }

  try {
    const response = await axios.get(OMDB_URL, {
      params: {
        i: movieId,
        apikey: apiKey,
      },
    });

    if (response.data.Response === "False") {
      return res.status(400).json({
        error: response.data.Error,
      });
    }

    return res.json(response.data);
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
