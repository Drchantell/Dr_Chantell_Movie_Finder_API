# Start Here

## 1. Open My Project

I unzip the project and open the `Dr_Chantell_Movie_Finder_API` folder in VS Code.

## 2. Install My Packages

I open the VS Code terminal and enter:

```bash
npm install
```

This installs Express, Axios, and dotenv from my `package.json` file.

## 3. Create My Private `.env` File

GitHub does not download my private `.env` file because `.gitignore` protects it. In VS Code, I copy `.env.example`, paste the copy in the main project folder, and rename the copy `.env`.

I request and activate a free API key from [OMDb](https://www.omdbapi.com/apikey.aspx). I open my new `.env` file and replace the placeholder with my real key. I do not use spaces, quotation marks, or angle brackets:

```env
OMDB_API_KEY=my_real_key_goes_here
PORT=3001
```

I never paste my real key into `.env.example`, my source code, GitHub, or a class submission message. My `.gitignore` protects `.env` from being uploaded.

If I receive `{"error":"Invalid API key!"}`, I check that I activated the key from the OMDb email, copied it correctly, saved `.env`, and restarted the server.

## 4. Start My Server

I enter:

```bash
npm start
```

When the terminal displays `Movie Finder API is running at http://localhost:3001`, I know my server started correctly.

## 5. Test My Work

I can open these addresses in a browser or send GET requests through Postman:

```text
http://localhost:3001/api/search?title=batman
http://localhost:3001/api/movies/tt0372784
```

I also test the required validation by opening:

```text
http://localhost:3001/api/search
```

I should receive a `400` status and this JSON message:

```json
{
  "error": "Title query parameter is required"
}
```

## 6. Stop My Server

When I finish testing, I click inside the terminal and press `Control + C`.
