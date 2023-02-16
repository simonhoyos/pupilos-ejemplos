// CommonJS
// named exports
// export const num = 0;
// import { num } from 'path';
// module.exports = { num };
// const { num } = require('path');
//
// default exports
// export default num;
// import loquesea from 'path'; (name can be anything)
// module.exports = num;
// const loquesea = require('path');

const PORT = 8000;

const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const db = {
  todos: [],
};

// CRUD

// endpoints - method http + path
app.get('/', (request, response) => {
  response.send('<h1>hola mundo!!!</h1>')
});

// Create
app.post('/todo', (req, res) => {
  const newTask = {
    id: uuidv4(),
    title: req.body.title,
  };

  db.todos.push(newTask);

  res.json(newTask);
});

// Read all
app.get('/todo', (req, res) => {
  const todos = db.todos;

  res.json(todos);
});

// Read details
app.get('/todo/:todoId', (req, res) => {
  const todoId = req.params.todoId;

  const todo = db.todos.filter((todo) => todo.id === todoId).at(0);

  res.json(todo);
});

// Update
app.put('/todo/:todoId', (req, res) => {
  const todoId = req.params.todoId;

  const todoIndex = db.todos.findIndex((todo) => todo.id === todoId);

  const updatedTask = {
    ...db.todos[todoIndex],
    ...req.body,
  };

  db.todos.splice(todoIndex, 1, updatedTask);

  res.json(updatedTask);
});

// Delete
app.delete('/todo/:todoId', (req, res) => {
  const todoId = req.params.todoId;

  const todoIndex = db.todos.findIndex((todo) => todo.id === todoId);

  const deletedTodo = db.todos.splice(todoIndex, 1).at(0);

  res.json(deletedTodo);
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
