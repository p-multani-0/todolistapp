const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT } = process.env;

const sequelize = new Sequelize({
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  username: DB_USER,
  dialect: DB_DIALECT,
});

const UserModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
};

const User = sequelize.define("users", UserModel);

module.exports = User;
