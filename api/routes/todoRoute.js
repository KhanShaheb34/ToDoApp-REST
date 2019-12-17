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
    .get(/*Read task*/)
    .put(/*Update task*/)
    .delete(/*Delete task*/);
};

// exporting the route
module.exports = routes;
