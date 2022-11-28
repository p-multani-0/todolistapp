const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const connectRedis = require("connect-redis");
const { createClient } = require("redis");

require("dotenv").config();
const { CLIENT_ORIGIN, SESSION_SECRET } = process.env;

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");
const todosRouter = require("./src/routes/todos");

const server = express();

const redisClient = createClient({ legacyMode: true });
redisClient.connect().catch(console.error);
const RedisStore = connectRedis(session);

server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, "public")));
server.use(cors({ origin: CLIENT_ORIGIN }));

server.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // if true only transmit cookie over https
      httpOnly: false, // if true prevent client side JS from reading the cookie
      maxAge: 1000 * 60 * 10, // session max age in milliseconds
    },
  })
);
server.use(passport.initialize());
server.use(passport.session());

server.use("/", indexRouter);
server.use("/users", usersRouter);
server.use("/todos", todosRouter);

// catch 404 and forward to error handler
server.use(function (req, res, next) {
  next(createError(404));
});

// error handler
server.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = server;
