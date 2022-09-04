const mysql = require("mysql2");
const inqurer = require("inquirer");
const consoleTable = require("console.table");
const util = require("util");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3301,
  user: "",
  database: "employee_db",
});
connection.query = util.promisify(connection.query);
