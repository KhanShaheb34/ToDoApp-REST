// using strict mode of JS
"use strict";

// requiring the packages
const mongoose = require("mongoose");

// getting the model
const Task = mongoose.model("Tasks");

// Getting the list of all tasks
exports.allTasks = (req, res) => {
  Task.find({}, (err, tasks) => {
    if (err) res.status(500).send(err);
    res.json(tasks);
  });
};

// Creating a task
exports.createTask = (req, res) => {
  const newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) res.status(500).send(err);
    res.json(task);
  });
};
