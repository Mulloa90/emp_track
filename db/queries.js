const connection = require("./connection");

class Store {
  constructor(connection) {
    this.connection = connection;
  } 
  getAllDepartments() {
    return this.connection.promise().query("SELECT * from department;")
  }
}
module.exports = new Store(connection)