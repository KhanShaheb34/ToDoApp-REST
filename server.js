// the main file //

// requiring packages
const express = require("express");
const mongoose = require("mongoose");
const bodyPerser = require("body-parser");

// requiring exported objects
const todoTask = require("./api/models/todoModel");
const todoRoute = require("./api/routes/todoRoute");

// setting up database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/tododb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// creating express app
const app = express();

// using app middlewares
app.use(bodyPerser.urlencoded({ extended: true }));
app.use(bodyPerser.json());

// adding the routes
todoRoute(app);
app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

// server settings
const PORT = process.env.PORT || 3000;
const HOST = "localhost";

// starting the server
app.listen(PORT, HOST, err => {
  if (err) throw err;
  console.log(`API Server is running on ${HOST}:${PORT}`);
});
