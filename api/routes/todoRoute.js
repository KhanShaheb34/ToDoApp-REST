// strict mode of JS
"use strict";

// importing todoController
const todoList = require("../controllers/todoController");

// creating routes
// '/task' is for creating task, read all tasks
// '/task/:taskId' is for update, delete, read a particular task
const routes = app => {
  app
    .route("/tasks")
    .get(todoList.allTasks)
    .post(todoList.createTask);
  app
    .route("/task/:taskId")
    .get(todoList.singleTask)
    .put(todoList.updateTask)
    .delete(todoList.deleteTask);
};

// exporting the route
module.exports = routes;
