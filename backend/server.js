const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
const routes = require("./routes/index.js");
const port = require("./config");

/**
 * express.json allow the server to accept incoming json requests in a json format.
 * Morgan used to visualize endpoints when testing out server with Postman.
 * Cors used to make requests to the server that is deployed at a different domain.
 */
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Secure Express.js app using the Helmet middleware
app.use(helmet());

// Use the routes to enable the API.
app.use("/search", routes);

// Add route for favourites
app.get("/favourites", (req, res) => {
  // Serve the favourites list (from local storage, could be updated with DB integration later)
  const favourites = JSON.parse(localStorage.getItem("Favourites")) || [];
  res.json(favourites);
});

// Ensure Express server accesses the project data using the body-parser middleware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express.static middleware used to access files from the frontend index.html folder via HTTP.
const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Run server by listening to port number 8080
app.listen(port.EXPRESS_APP_PORT, () => {
  console.log(`Navigate to http://localhost:${port.EXPRESS_APP_PORT}/search`);
});

// Initiate an error statement if an error occurs whilst running the server.
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Something broke!");
});
