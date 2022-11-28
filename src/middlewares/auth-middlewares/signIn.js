const passport = require("passport");
const jwt = require('jsonwebtoken')

const singIn = (req, res, next) => {
  passport.authenticate("local", (error, user, info) => {

    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(500).json({
          message: error || "Something happend",
          error: error.message || "Server error",
        });
      }
    });

    const token = jwt.sign(user, process.env.JWT_SECRET);
    res.status(200).json({ token });
  })(req, res, next);
};

module.exports = singIn;
