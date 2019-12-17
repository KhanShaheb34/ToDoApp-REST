// the model of each task //

// for strict mode of JS
"use strict";

// requiring packages
const mongoose = require("mongoose");

// crating a schema
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required"
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ["pending", "running", "done"],
    default: "pending"
  }
});

// exporting the model of the schema
module.exports = mongoose.model("Tasks", TaskSchema);
