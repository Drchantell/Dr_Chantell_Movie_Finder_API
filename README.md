# Movie Finder RESTful API

## About My Project

I built this beginner-friendly RESTful server with Node.js and Express. My server acts as a middle person between a user and the OMDb movie database. When a user searches for a movie or requests one movie by its IMDb ID, my server sends a request to OMDb with Axios and returns the movie information as JSON.

## What I Learned

I learned how to create an Express server, organize routes and controllers into separate folders, read query parameters and route parameters, and communicate with an external API. I also learned how to protect an API key with a `.env` file and `.gitignore`. I used `try...catch` blocks so my server can return a clear error message when an external request fails.

## Project Structure

```text
Dr_Chantell_Movie_Finder_API/
├── controllers/
│   └── movieController.js
├── public/
│   ├── index.html
│   └── style.css
├── routes/
│   └── movieRoutes.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── RUBRIC_CHECKLIST.md
├── START_HERE.md
├── reflection.md
└── server.js
```

## How to Run My Project

I begin with the instructions in `START_HERE.md`. I open the project folder in VS Code, install the packages, copy `.env.example` to a new file named `.env`, add my activated OMDb API key, and start the server. I restart the server after changing `.env` so dotenv can load the new value.

## Endpoints

- Search: `GET http://localhost:3001/api/search?title=batman`
- Details: `GET http://localhost:3001/api/movies/tt0372784`

If I visit `/api/search` without a title, my server returns a `400 Bad Request` error. If an Axios request fails, my server returns a `500` error and a helpful JSON message.

## Testing in Postman

I select the `GET` method, paste either endpoint into Postman, and click **Send**. I expect the response body to contain JSON movie data. I never upload my `.env` file or API key to GitHub.
