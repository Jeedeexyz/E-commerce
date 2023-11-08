const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const querystring = require("querystring");
const app = express();
const port = 3001;

app.use(cors("*"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let search = "";

app.post("/api", async (req, res) => {
  const { query } = req.body;
  search = query;
  res.send(query);
});

const spotifyClientId = "38d317f69fc44ccabfa85a0b59ff5cd1";
const spotifyClientSecret = "64af6db258af4b3bbaf210fa0c88156a";
const redirectUri = "http://localhost:3001/callback";

app.get("/login", (req, res) => {
  const scopes = "playlist-modify-public";
  var state = generateRandomString(16);
  const authorizeURL =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: spotifyClientId,
      scope: scopes,
      redirect_uri: redirectUri,
      state: state,
    });
  console.log(authorizeURL);
  res.redirect(authorizeURL);
});

app.get("/callback", function (req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;

  if (state === null) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: req.query.code,
        redirect_uri: redirectUri, // Use the correct redirect URI
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer.from(spotifyClientId + ":" + spotifyClientSecret).toString(
            "base64"
          ), // Use the correct credentials
      },
      json: true,
    };

    // Continue with your authentication logic here
  }
});

app.get("/search", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: search,
      type: "tracks",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },
    headers: {
      "X-RapidAPI-Key": "8f2ad84c2amshd323d3617062556p1b0869jsn92d5c4a361f4",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const responseData = response.data;

    res.json(responseData); // Send the result as a response
  } catch (error) {
    console.log("Get API failed");
    res.status(500).json({ error: "Get API failed" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
