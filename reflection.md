# Reflection

I created a RESTful Movie Finder server that communicates with the OMDb API. The biggest idea I learned is that my server does not have to store the movie data. Instead, it receives a request, asks OMDb for the information, and returns the result to the user.

One challenge was understanding the difference between a query parameter and a route parameter. I worked through this challenge by looking at where each value appears in the URL. I used `req.query.title` for a movie search because the title appears after the question mark. I used `req.params.id` for movie details because the IMDb ID is part of the URL path. Separating the route definitions from the controller functions also helped me understand how a larger server can stay organized.

I also learned why the `.env` and `.gitignore` files are important. The `.env` file keeps my API key separate from my code, and `.gitignore` stops the private key and the `node_modules` folder from being uploaded to GitHub. This project gave me practice with Express, Axios, asynchronous functions, validation, JSON responses, and error handling.
