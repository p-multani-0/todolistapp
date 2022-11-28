const express = require("express");
const router = express.Router();
const signUp = require("../middlewares/auth-middlewares/signUp");
const singIn = require("../middlewares/auth-middlewares/signIn");
const signOut = require("../middlewares/auth-middlewares/signOut");
const root = require("../middlewares/auth-middlewares/root");
const passport = require("../auth/index");

/* GET home page. */
router.get("/", root);

router.post("/sign-up", signUp);

router.post("/sign-in", singIn);

router.post("/sign-out", signOut);

module.exports = router;
