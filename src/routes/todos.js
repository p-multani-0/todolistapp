const express = require("express");
const passport = require("passport");
const postTodo = require("../middlewares/todo-middlewares/postTodo");
const getTodos = require("../middlewares/todo-middlewares/getTodos");
const getTodoById = require("../middlewares/todo-middlewares/getTodo");
const putTodo = require("../middlewares/todo-middlewares/putTodo");
const deleteTodo = require("../middlewares/todo-middlewares/deleteTodo");

const router = express.Router();

/* GET todos list */
router.get("/list", passport.authenticate("jwt", { session: false }), getTodos);

/* GET todo by id */
router.get("/:id", passport.authenticate("jwt", { session: false }), getTodoById);

/* POST todo */
router.post("/create", passport.authenticate("jwt", { session: false }), postTodo);

/* PUT todo */
router.put("/:id", passport.authenticate("jwt", { session: false }), putTodo);

/* DELETE todo */
router.delete("/:id", passport.authenticate("jwt", { session: false }), deleteTodo);


module.exports = router;
