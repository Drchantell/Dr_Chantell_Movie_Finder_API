# Movie Finder API Rubric Checklist

I used this checklist to confirm that my assessment meets each requirement.

## Project Setup and Structure — 20 Points

- [x] My `package.json` includes Express, Axios, and dotenv.
- [x] My private API key belongs in `.env` and is not hardcoded.
- [x] My `.gitignore` excludes `.env` and `node_modules/`.
- [x] My project has separate `routes` and `controllers` folders.

## Server and Routing — 20 Points

- [x] My `server.js` creates and starts an Express server.
- [x] My server uses port 3001 unless another port is provided.
- [x] My server prints a startup message.
- [x] My router uses `express.Router()`.
- [x] My routes are mounted with the `/api` prefix.

## Search Endpoint — 30 Points

- [x] My project defines `GET /api/search`.
- [x] My controller reads the title from `req.query.title`.
- [x] A missing title returns status `400` and a JSON error.
- [x] Axios sends the `s` and `apikey` parameters to OMDb.
- [x] My server returns the OMDb search response as JSON.

## Movie Details Endpoint — 20 Points

- [x] My project defines `GET /api/movies/:id`.
- [x] My controller reads the IMDb ID from `req.params.id`.
- [x] Axios sends the `i` and `apikey` parameters to OMDb.
- [x] My server returns the OMDb movie details as JSON.

## Error Handling — 10 Points

- [x] Both controller functions use `try...catch`.
- [x] A failed external request returns status `500` with a clear JSON error.

## Final Safety Check

- [x] My code is written in simple, beginner-friendly JavaScript.
- [x] My README and reflection use natural first-person language.
- [x] My welcome page uses my bold hot-pink, black, and lavender colors.
- [x] My real OMDb API key is not included in GitHub.

**Rubric coverage: 100 out of 100 possible points, after a valid OMDb API key is added and the two live endpoints are successfully tested.**
