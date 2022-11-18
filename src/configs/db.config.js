const mysql = require("mysql");

require("dotenv").config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const dbConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: env.DB_PORT,
};

const dbConnection = () => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect((error) => {
    if (error) {
      console.log("Database Connection Error: ", error);
    } else {
      console.log("Database Connection Failed");
    }
  });
};

module.exports = { dbConnection };
