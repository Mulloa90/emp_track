const inquirer = require("inquirer");
require("console.table");
const util = require("util");

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
          "Add New Role",
          "Add New Employee",
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
        case "Add New Employee":
          addNewEmployee();
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
        name: "name",
        message: "Whats is the new departments name?",
      },
    ])
    .then(({ name }) => {
      store
        .createNewdepartment({ name })
        .then(() => {
          console.log(`Added ${name} to the db`);
        })
        .then(() => {
          init();
        });
    });
}

function addNewRole() {
  store.getAllDepartments().then(([departments]) => {
    const choices = departments.map((department) => ({
      name: department.name,
      value: department.id,
    }));

    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What is the title of the role?",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary of the role?",
        },
        {
          type: "list",
          name: "department_id",
          message: "Which department does this role belong to?",
          choices: choices,
        },
      ])
      .then(({ title, salary, department_id }) => {
        store
          .createNewRole({
            title,
            salary,
            department_id,
          })
          .then(() => {
            console.log(`Added ${title} to the db`);
          })
          .then(() => {
            init();
          });
      });
  });
}

function addNewEmployee() {
  let roleChoices;
  let managerChoices;

  store.getAllRoles().then(([roles]) => {
    roleChoices = roles.map((role) => ({
      name: role.title,
      value: role.id,
    }));

    store.getAllEmployees().then(([employees]) => {
      managerChoices = employees.map((employee) => ({
        name: employee.first_name + " " + employee.last_name,
        value: employee.id,
      }));

      inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "What is the Employees first name?",
          },
          {
            type: "input",
            name: "last_name",
            message: "What is the Employees last name?",
          },
          {
            type: "list",
            name: "role_id",
            message: "What is the Employees role?",
            choices: roleChoices,
          },
          {
            type: "list",
            name: "manager_id",
            message: "What is this Employees manager",
            choices: managerChoices,
          },
        ])
        .then(({ first_name, last_name, role_id, manager_id }) => {
          store
            .createNewEmployee({
              first_name,
              last_name,
              role_id,
              manager_id,
            })
            .then(() => {
              console.log(`Added ${first_name} ${last_name} to the db`);
            })
            .then(() => {
              init();
            });
        });
    });
  });
}
