# Reflection

## What did I learn?

I learned how to build an Express server that communicates with another server. My Movie Finder sends a request to OMDb with Axios and returns the response as JSON. I also learned how routes and controllers work together. The route identifies the endpoint, and the controller contains the instructions for handling the request.

## What was challenging for me?

The most challenging part was troubleshooting the API key. My server displayed the correct startup message, but my movie request still failed with a `401` error. At first, I thought the problem was in my Express code. I learned that the `401` response came from OMDb and meant that OMDb did not authorize the key.

It was also challenging to understand when to use `req.query` and when to use `req.params`. The two values both come from a URL, but they are located in different places. I understood the difference better after comparing the search URL with the movie-details URL.

## How did I work through the problems?

I tested one part at a time. First, I confirmed that the server was running on port 3001. Next, I tested the missing-title validation. Then I tested the OMDb request by itself. This helped me separate a server problem from an external API-key problem.

I protected the key by placing it in `.env` and adding `.env` to `.gitignore`. I also improved my controller so it checks for a missing key, recognizes an OMDb error response, and handles a `401` response with a clear message. Restarting the server after changing `.env` was another important part of the solution.

## What would I do differently next time?

Next time, I would activate and test the external API key before building all of my routes. I would test each endpoint as soon as I create it instead of waiting until the end. I would also continue using small comments and separate files because that made the project easier for me to read and troubleshoot.

## My final takeaway

This assignment helped me understand that backend development includes more than writing code. I also have to manage configuration, protect private information, test outside services, read error messages, and determine whether a problem is coming from my application or from an external API.
