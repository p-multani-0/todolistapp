const express = require("express");
const router = express.Router();

/* GET users list */
router.get("/users/list", function (req, res, next) {
  res.send("respond with a resource");
});

/* GET user by id */
router.get("/users:id", function (req, res, next) {
  res.send("respond with a resource");
});

/* POST new user */
router.post("/users/create", function (req, res, next) {
  res.send("respond with a resource");
});

/* PUT user data */
router.put("/users:id", function (req, res, next) {
  res.send("respond with a resource");
});

/* DELETE user */
router.delete("/users:id", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
