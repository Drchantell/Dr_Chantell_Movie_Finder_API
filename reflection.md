 eflection

In this project, I built a RESTful Movie Finder server with Node.js and Express. My server does not store movie information itself. Instead, it connects to the OMDb API with Axios, requests the information, and sends the results back as JSON. This helped me understand how one server can communicate with another server.

One part that was challenging for me was understanding the difference between a query parameter and a route parameter. I learned that the title in `/api/search?title=hidden%20figures` is a query parameter, so I read it with `req.query.title`. The IMDb ID in `/api/movies/tt4846340` is part of the route, so I read it with `req.params.id`. Looking at where each value appears in the URL made the difference easier for me to understand.

I also had to learn how to work with an API key. At first, an invalid or missing key could make the response confusing. I improved the controller so it checks for a missing key and also recognizes error messages returned by OMDb. I learned that `try...catch` handles request failures, but I still need to check the JSON response because an external API can return an error message even when the request reaches the API successfully.

The `.env` and `.gitignore` files taught me an important security lesson. I keep my real API key in `.env`, and `.gitignore` prevents that file from being uploaded to GitHub. I can safely include `.env.example` because it only contains a placeholder.

Overall, this project gave me practice with Express, routes, controllers, Axios, async functions, parameters, validation, error handling, JSON responses, and secure environment variables. I feel more comfortable reading an API URL and understanding how the request moves through my server.

Author:
Dr. Chantell McDowell
Per Scholas Student
