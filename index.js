//starts Inquirer
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
