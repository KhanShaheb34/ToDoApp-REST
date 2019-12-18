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

// get a task
exports.singleTask = (req, res) => {
  const taskId = req.params.taskId;
  Task.findById(taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

// update a task
exports.updateTask = (req, res) => {
  const taskId = req.params.taskId;
  Task.findByIdAndUpdate(taskId, req.body, { new: true }, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

// delete a task
exports.deleteTask = (req, res) => {
  const taskId = req.params.taskId;
  Task.findByIdAndDelete(taskId, (err, task) => {
    if (err) res.send(err);
    res.json({ masage: "Deleted Succesfully!" });
  });
};
