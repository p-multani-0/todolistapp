const { deleteTodo: removeTodo } = require("../../controllers/todos");

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await removeTodo(id);
    if (result.deletedCount === 1){
      return res.send(200);
    }
    throw new Error('Document not deleted due to internal error')
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal server error!" });
  }
};

module.exports = deleteTodo;
