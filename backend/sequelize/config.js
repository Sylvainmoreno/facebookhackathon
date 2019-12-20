require("dotenv").config();

const host = "127.0.0.1";
const username = "root";
const password = "Ikkyunyukon1!";
let database = "test";
let dialect = "mysql";

if (process.env.NODE_ENV === "test") {
  database = process.env.DB_DATABASE_TEST;
}

const conf = {
  host,
  username,
  password,
  database,
  dialect,
  logging: false
};

module.exports = conf;
