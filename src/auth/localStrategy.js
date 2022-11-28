const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const LocalStrategy = require("passport-local/lib").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    const user = await User.findOne({ email });

    if (!user) {
      done({ type: "email", message: "No such user found" }, false);
      return;
    }

    if (bcrypt.compareSync(password, user.password)) {
      done(null, { id: user.id, email: user.email });
    } else {
      done({ type: "password", message: "Passwords did not match" }, false);
    }
  }
);

module.exports = strategy;
