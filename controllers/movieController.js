const axios = require("axios");

const OMDB_URL = "https://www.omdbapi.com/";

function getApiKey() {
  const apiKey = process.env.OMDB_API_KEY?.trim();

  if (!apiKey || apiKey === "your_key_here") {
    return null;
  }

  return apiKey;
}

function sendOmdbError(res, error, action) {
  const status = error.response?.status === 401 ? 502 : 500;
  const providerError = error.response?.data?.Error;

  console.error(`Movie ${action} error:`, providerError || error.message);
  res.status(status).json({
    error: providerError || `Unable to ${action} movies right now`,
  });
}

// GET /api/search?title=batman
async function searchMovies(req, res) {
  const title = req.query.title;

  if (!title) {
    return res.status(400).json({
      error: "Title query parameter is required",
    });
  }

  const apiKey = getApiKey();

  if (!apiKey) {
    return res.status(500).json({
      error: "OMDb API key is not configured",
    });
  }

  try {
    const response = await axios.get(OMDB_URL, {
      params: {
        s: title,
        apikey: apiKey,
      },
    });

    res.json(response.data);
  } catch (error) {
    sendOmdbError(res, error, "search for");
  }
}

// GET /api/movies/tt0372784
async function getMovieDetails(req, res) {
  const movieId = req.params.id;
  const apiKey = getApiKey();

  if (!apiKey) {
    return res.status(500).json({
      error: "OMDb API key is not configured",
    });
  }

  try {
    const response = await axios.get(OMDB_URL, {
      params: {
        i: movieId,
        apikey: apiKey,
      },
    });

    res.json(response.data);
  } catch (error) {
    sendOmdbError(res, error, "get");
  }
}

module.exports = {
  searchMovies,
  getMovieDetails,
};
