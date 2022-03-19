// import inquirer and express
const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require("mysql2");
// import console.table
const cTable = require("console.table");

require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_db",
});
//Check if there's an error, else starts the application
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to employee_db database");
  startApp();
});

var startInquirer = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "choices",
      message: "What would you like to do",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Update an employee manager",
        "View employees by manager",
        "View employees by department",
        "Delete a department",
        "Delete a role",
        "Delete an employee",
        "View department budgets",
        "No action",
      ],
    },
  ]);
};
