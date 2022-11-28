const { readTodoById } = require('../../controllers/todos')

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await readTodoById(id);

    res.status(200).json({ todo })
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal server error!" });
  }
};

module.exports = getTodo;
