const inquirer = require("inquirer");
require("console.table");
const util = require("util");
const { query } = require("./db/connection");
const { connection } = require("./db/queries");

const store = require("./db/queries");

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "Add a department",
          "View All Roles",
          "View All Employees",
          "Add new role",
          "Quit",
        ],
      },
    ])
    .then((response) => {
      switch (response.selection) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "Add a department":
          createNewdepartment();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add New Role":
          addNewRole();
          break;
        case "Quit":
          process.exit();
      }
    });
}
init();
function viewAllDepartments() {
  store.getAllDepartments().then(([departments]) => {
    console.table(departments);
    init();
  });
}
function viewAllRoles() {
  store.getAllRoles().then(([roles]) => {
    console.table(roles);
    init();
  });
}
function viewAllEmployees() {
  store.getAllEmployees().then(([employees]) => {
    console.table(employees);
    init();
  });
}
function createNewdepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Department Name",
        message: "Whats is the new departments name?",
      },
    ])
    .then((response) => {
      store
        .createNewdepartment({ name: response["Department Name"] })
        .then((response) => {
          console.log(`Added ${response.name} to the db`);
        })
        .then(() => {
          init();
        });
    });
}
function addNewRole() {
  connection.query(`SELECT * FROM department;`, function (err, res) {
    if (err) throw err;
    const departments = [];
    for (let i = 0; i <= res.length - 1; i++) {
      departments.push(res[i].name);
    }
    inquirer
      .prompt([
        {
          type: "input",
          name: "Role name",
          message: "What is the name of the role?",
        },
        {
          type: "input",
          name: "Salary",
          message: "What is the salary of the role?",
        },
        {
          type: "lists",
          name: "department",
          message: "Which department does this role belong to?",
          choices: departments,
        },
      ])
      .then((response) => {
        let id;
        for (let i = 0; i <= res.length - 1; i++) {
          if (res[i].name === response["department"]) {
            id = res[i].id;
          }
        }
        store
          .createNewRole({
            title: response["Role Name"],
            salary: response["Salary"],
            department_id: response["departments"],
          })
          .then((response) => {
            console.log(`Added ${response.title} to the db`);
          })
          .then(() => {
            init();
          });
      });
  });
}
