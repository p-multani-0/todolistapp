const { readTodos } = require('../../controllers/todos')

const getTodos = async (req, res) => {
  try {
    const { id } = req.user;
    const todosList = await readTodos(id);
    res.status(200).json(todosList)
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal server error!" });
  }
};

module.exports = getTodos;
