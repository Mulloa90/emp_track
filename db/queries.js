const connection = require("./connection");

class Store {
  constructor(connection) {
    this.connection = connection;
  }
  getAllDepartments() {
    return this.connection.promise().query("SELECT * from department;");
  }
  getAllRoles() {
    return this.connection.promise().query("SELECT * from role;");
  }

  getAllEmployees() {
    return this.connection.promise().query("SELECT * from employee;");
  }
  createNewdepartment(departmentName) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", departmentName);
  }
  createNewEmployee(employeeData) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employeeData);
  }
  createNewRole(RoleData) {
    return this.connection
      .promise()
      .query("INSERT INTO role SET ?", RoleData);
  }
}
module.exports = new Store(connection);
