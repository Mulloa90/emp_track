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
        choices: ["View all departments"],
      },
    ])
    .then((response) => {
      switch (response.selection) {
        case "View all departments":
          viewAllDepartments();
      }
    });
}
init();
function viewAllDepartments() {
  store.getAllDepartments().then(([departments]) => {
    console.table(departments);
  });
}
