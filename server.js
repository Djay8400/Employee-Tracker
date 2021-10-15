const mysql = require('mysql2');
const inquirer = require("inquirer");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Shopping1!',
      database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
  );

function userChoice() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "fork",
                message: "What would you like to do?",
                choices:["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Departments", "Quit"],
            },
        ])
        .then((response) => {
            if (response.fork === "View All Employees") {
                viewEmployees();
            } else if (response.fork === "Add Employee") {
                addEmployee();
            } else if (response.fork === "Update Employee Role") {
                updateEmpRole();
            } else if (response.fork === "View All Roles") {
                viewRoles();
            } else if (response.fork === "Add Role") {
                addRole();
            } else if (response.fork === "View All Departments") {
                viewDepartments();
            } else if (response.fork === "Add Departments") {
                addDepartments();
            } else {
                iQuit()
            }
        })
}
  
const viewEmployees = () => { 
    // show employee table

    //Back to main menu
    userChoice();                            
}

const addEmployee = () => {  
    inquirer 
      .prompt([
        {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?",   
        },
        {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?",   
        },
        {
        type: "list",
        name: "role",
        message: "What is the employee's role?", 
        choices:[""], //needs a way to populate here what the roles are from Role Table  
        },
        {
        type: "list",
        name: "manager",
        message: "Who is the employee's manager?",
        choices:[""], //needs a way to populate here what the managers are from ??Manager Table??
        },
     ])
     .then((response) => {
        // use response to create a new employee on Employee Table


        // db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
        //     console.log(results);
        // });
          
        // db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
        //     console.log(results);
        // });
        userChoice();
    })                           
}

const updateEmpRole = () => {  
    inquirer 
      .prompt([
        {
        type: "list",
        name: "employee",
        message: "Which employee's role do you want to update?",
        choices:[""], //needs a way to populate here what employees there are from Employee Table   
        },
        {
        type: "list",
        name: "role",
        message: "Which role do you want to assign the selected employee?",
        choices:[""], //needs a way to populate here what the roles are from Role Table 
        },
     ])
     .then((response) => {
        // use response to change employee's role on Role Table


        // db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
        //     console.log(results);
        // });
          
        // db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
        //     console.log(results);
        // });
        userChoice();
    })                           
}

const viewRoles = () => { 
    // show role table

    //Back to main menu
    userChoice();                            
}

const addRole = () => {  
    inquirer 
      .prompt([
        {
        type: "input",
        name: "role",
        message: "What is the name of the role?",   
        },
        {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",   
        },
        {
        type: "list",
        name: "department",
        message: "Which department does the role belong to?",
        choices:[""], //needs a way to populate here what departments there are from Department Table   
        },
     ])
     .then((response) => {
        // use response to add a role on Role Table


        // db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
        //     console.log(results);
        // });
          
        // db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
        //     console.log(results);
        // });
        userChoice();
    })                           
}

const viewDepartments = () => { 
    // show department table

    //Back to main menu
    userChoice();                            
}

const addDepartments = () => {  
    inquirer 
      .prompt([
        {
        type: "input",
        name: "department",
        message: "What is the name of the department?",   
        },
     ])
     .then((response) => {
        // use response to add a department on Department Table


        // db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
        //     console.log(results);
        // });
          
        // db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
        //     console.log(results);
        // });
        userChoice();
    })                           
}

const iQuit = () => { 
    // quits mysql

                             
}

userChoice();
