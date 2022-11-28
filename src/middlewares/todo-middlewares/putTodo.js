const { updateTodo } = require("../../controllers/todos");

const putTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { todo } = req.body;

    const updatedTodo = {
      title: todo.title || '--',
      description: todo.description || '--',
      status: todo.status || 'SCHEDULED',
      deadline: todo.deadline || new Date(),
    }
    const result = await updateTodo(id, updatedTodo);
    return res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

module.exports = putTodo;
