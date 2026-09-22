// Load private settings from .env before using them.
require("dotenv").config();

const express = require("express");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// This lets Express understand JSON request data.
app.use(express.json());

// Serve the small welcome page from the public folder.
app.use(express.static("public"));

// Every movie route begins with /api.
app.use("/api", movieRoutes);

app.listen(PORT, () => {
  console.log(`Movie Finder API is running at http://localhost:${PORT}`);
});
