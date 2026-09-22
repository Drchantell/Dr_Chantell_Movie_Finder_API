Movie Finder RESTful API

## About My Project

I built a Movie Finder API using Node.js, Express, and Axios. My server connects to the OMDb API and asks it for movie information. This means I did not have to create or store my own list of movies. My server receives a request, sends it to OMDb, and returns the results as JSON.

I created two endpoints. One endpoint searches for movies by title, and the other finds one movie by its IMDb ID. I also added a simple welcome page using my hot-pink, black, and lavender colors.

## What I Learned

I learned how to build an Express server and separate my code into routes and controllers. The routes decide which controller function should run. The controller functions handle the request, contact OMDb, and send a response back to the user.

I also learned the difference between a query parameter and a route parameter. I use `req.query.title` to read the movie title after the question mark in the search URL. I use `req.params.id` to read the IMDb ID that appears inside the movie-details URL.

Another important lesson was protecting private information. I keep my OMDb API key in a `.env` file, and my `.gitignore` prevents that file from being uploaded to GitHub.

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

How I Run My Project

I start by opening `START_HERE.md` and following the directions one step at a time. I install the packages with `npm install`. Then I copy `.env.example`, rename the copy `.env`, and replace the example text with my activated OMDb API key. I start the server with `npm start`.

## My Endpoints

- Movie search: `GET http://localhost:3001/api/search?title=hidden%20figures`
- Movie details: `GET http://localhost:3001/api/movies/tt4846340`

## How I Test My Project

I can test both endpoints in my browser or in Postman. In Postman, I select `GET`, paste an endpoint into the address box, and click **Send**. A successful request returns movie information in JSON format.

I also test `http://localhost:3001/api/search` without a title. My server should return a `400 Bad Request` response with a message explaining that the title is required. If my API key is missing or OMDb cannot complete the request, my server returns a clear error message instead of crashing.

Author:
Dr.Chantell McDowell
Per Scholas Student
