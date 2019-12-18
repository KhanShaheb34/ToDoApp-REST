# ToDoApp-REST
Just learning REST with Node and MongoDB

### To run the server:
* Clone/Download the repository
* Open terminal inside the downloaded repository folder
* run 

  `npm i && npm i --dev`
* run

  `yarn start`

Then the api server will be started on `localhost:3000`

### API Documentation
* `/tasks`
  * `get` -> Show all of the tasks
  * `post` -> Create a task
* `/task/:taskId`
  * `get` -> Show the task with id of the `taskId`
  * `put` -> Update the task
  * `delete` -> Delete the task
  
### Data Model
* Single task
  ```js
  {
    _id: "_id, auto generated",
    name: "String, required",
    status: "String",
    createdOn: "Date"
  }
  ```
* All task
  ```js
  [
    {"Single Task"},
    {"Single Task"},
    {"Single Task"}
  ]
  ```
