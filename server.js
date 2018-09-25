// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express
var app = express();
var PORT = process.env.PORT || 8080;

// Public Directory
app.use(express.static(path.join((__dirname, "./app/public"))));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Server begins listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
