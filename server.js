"use strict";

// require packages
const mongoose = require("mongoose");

// connecting to the database
mongoose.connect("mongodb://127.0.0.1:27017/learndb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("error", () => console.log("Error during connection!"));
db.once("open", () => {
  // we're connected
  console.log("Connected to the Database!");

  // creating schema
  var LanguageSchema = new mongoose.Schema({
    name: String,
    invented: String,
    rating: Number
  });
  var Language = mongoose.model("Language", LanguageSchema);

  // data samples
  var JS = new Language({ name: "JavaScript", invented: "1995", rating: "10" });
  var Python = new Language({ name: "Python", invented: "1999", rating: "9" });

  // // saving data to database
  // JS.save((err, JS) => {
  //   if (err) throw err;
  //   console.log("Data saved as:");
  //   console.log(JS);
  // });
  // Python.save((err, Python) => {
  //   if (err) throw err;
  //   console.log("Data saved as:");
  //   console.log(Python);
  // });

  // display full collection
  Language.find({ name: /^P/ }, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});
