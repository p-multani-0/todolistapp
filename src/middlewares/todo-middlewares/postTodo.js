const { createTodo } = require("../../controllers/todos");

const postTodo = async (req, res) => {
  try {
    const { id } = req.user;
    const { todo } = req.body;

    const newTodo = {
      userId: id,
      title: todo.title || '--',
      description: todo.description || '--',
      status: todo.status || false,
      deadline: todo.deadline || new Date(),
    }
    const result = await createTodo(newTodo);
    return res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

module.exports = postTodo;
