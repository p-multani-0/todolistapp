const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const JWTStrategy = require("./jwtStrategy");
const User = require("../models/UserModel");

passport.use('local', LocalStrategy);

//Serialize user with passport using hes/her email
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//Deserialize user with passport using hes/her email
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (!user) {
    done(error, false);
  }
  done(null, user);
});

passport.use("jwt", JWTStrategy);

module.exports = passport;
