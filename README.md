# Movie Finder RESTful API

## About My Project

I built a Movie Finder API using Node.js, Express, and Axios. My server connects to the OMDb API and requests movie information instead of storing movie data inside my project. It can search for movies by title and find one movie by its IMDb ID. The results are returned as JSON.

I organized my project with separate route and controller files. My routes determine which function should run, and my controller functions handle the request, contact OMDb, and return a response. I also created a simple welcome page using my hot-pink, black, and lavender colors.

## Complications I Had

The biggest complication I had was getting the OMDb API key to work. My server started correctly, but OMDb returned a `401` response because it did not accept the key. This taught me that a running Express server does not always mean an external API request will be successful. I had to check the response from OMDb separately from checking whether my own server was running.

I also had to make sure my key was stored in the correct `.env` file instead of `.env.example`. After changing `.env`, I needed to stop and restart my server so dotenv could load the updated value. I kept the real key out of GitHub by listing `.env` in `.gitignore`.

Another challenge was understanding the two types of parameters. I use `req.query.title` for a movie title because it appears after the question mark in the search URL. I use `req.params.id` for an IMDb ID because it is part of the URL path. I also learned that spaces in a movie title can appear as `%20` in a URL.

OMDb can report an error in two ways. It can return an HTTP error such as `401`, or it can return JSON with `"Response": "False"`. I updated my controller to handle both situations and return a clear message instead of allowing the application to crash.

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
├── START_HERE.md
├── reflection.md
└── server.js
```

## How I Run My Project

I open the project in VS Code and run `npm install`. I copy `.env.example`, rename the copy `.env`, and replace the placeholder with my activated OMDb key. I start the server with `npm start`. When I change `.env`, I restart the server.

## My Endpoints

- Movie search: `GET http://localhost:3001/api/search?title=hidden%20figures`
- Movie details: `GET http://localhost:3001/api/movies/tt4846340`

## How I Test My Project

I can test my endpoints in a browser or Postman. I also test `/api/search` without a title to make sure it returns a `400 Bad Request`. I check missing and invalid API-key responses to make sure the server returns a helpful JSON message instead of stopping.


Author:
Dr. Chantell McDowell 
Per Scholas Student 