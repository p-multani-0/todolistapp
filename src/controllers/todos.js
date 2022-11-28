const Todos = require("../models/TodoModel");
const { ObjectId } = require('mongodb')

//CRUD TODOS

const createTodo = async (todo) => {
  try {
    const result = await Todos.create(todo);
    return result;
  } catch (error) {
    throw error;
  }
};

const readTodos = async (id) => {
  try {
    const result = await Todos.find({ userId: id });
    return result;
  } catch (error) {
    throw error;
  }
};

const readTodoById = async (id) => {
  try {
    const result = await Todos.findById(ObjectId(id));
    return result;
  } catch (error) {
    throw error;
  }
};

const updateTodo = async (id, todo) => {
  try {
    const result = await Todos.findByIdAndUpdate(ObjectId(id), todo);
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteTodo = async (id) => {
  try {
    const result = await Todos.deleteOne(ObjectId(id));
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { createTodo, readTodos, readTodoById, updateTodo, deleteTodo };
