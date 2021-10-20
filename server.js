const mysql = require('mysql2');
const inquirer = require("inquirer");
const consoleTable = require("console.table");



// let roles = ``;
// let departments = ``;

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Shopping1!',
      database: 'employee_tracker'
    },
    
);

const userChoice = () => { 
    inquirer
        .prompt([
            {
                type: "list",
                name: "fork",
                message: "What would you like to do?",
                choices:["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Departments", "Quit"],
            }
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
    db.query("SELECT * FROM employee", function (err, results) {
        console.log()
        console.log()
        console.table(results)
    })
    //Back to main menu
    userChoice();                            
}

const addEmployee = () => {  
    db.query("SELECT id, title FROM roles", function (err, results) {
        const empTitles = results.map(role => {
            return `${role.id} ${role.title}`;
        });
    db.query("SELECT id, first_name, last_name FROM employee", function (err, results) {
        const empNames = results.map(names => {           
            return `${names.id} ${names.first_name} ${names.last_name}`;
        });             
        
        inquirer 
      .prompt([
        {
        type: "input",
        name: "first",
        message: "What is the employee's first name?",   
        },
        {
        type: "input",
        name: "last",
        message: "What is the employee's last name?",   
        },
        {
        type: "list",
        name: "role",
        message: "What is the employee's role?", 
        choices: empTitles, //populate here what the roles are from Role Table  
        },
        {
        type: "list",
        name: "manager",
        message: "Who is the employee's manager?",
        choices:["NULL", ...empNames], //populate here what the managers are from employee table
        },
     ])
     .then((response) => {
        // use response to create a new employee on Employee Table
        let empRoleId = response.role.split(' ').shift();
        let empManagerId = response.manager.split(' ').shift();

        let empColumns = `(first_name, last_name, role_id, manager_id)`
        let employees = `VALUES 
            ("${response.first}", "${response.last}", ${empRoleId}, ${empManagerId})`
                    
        console.log(employees)
        db.query(`INSERT INTO employee ${empColumns} ${employees}`, (err, results) => {
            console.log(results);
        });
          
        
        userChoice();
    }) 
    })                          
 }) 
}

const updateEmpRole = () => {  
    db.query("SELECT id, title FROM roles", function (err, results) {
        const empTitles2 = results.map(role => {
            return `${role.id} ${role.title}`;
        });
    db.query("SELECT id, first_name, last_name FROM employee", function (err, results) {
        const empNames2 = results.map(names => {           
            return `${names.id} ${names.first_name} ${names.last_name}`;
        });         
    inquirer 
      .prompt([
        {
        type: "list",
        name: "employee",
        message: "Which employee's role do you want to update?",
        choices: empNames2, //populate here what employees there are from Employee Table   
        },
        {
        type: "list",
        name: "role",
        message: "Which role do you want to assign the selected employee?",
        choices: empTitles2, //needs a way to populate here what the roles are from Role Table 
        },
     ])
     .then((response) => {
        // use response to change employee's role on Role Table
        let empRoleId2 = response.employee.split(' ').shift();
        let empManagerId = response.role.split(' ').shift();

        db.query(`UPDATE employee SET role_id = ${empManagerId} WHERE id = ${empRoleId2}`, (err, results) => {
            console.log(results);
        });
        
        userChoice();
    }) 
  })                          
})                           
}

const viewRoles = () => { 
    // show role table
    db.query("SELECT * FROM roles", function (err, results) {
        console.log()
        console.log()        
        console.table(results)
    })
    //Back to main menu
    userChoice();                            
}

const addRole = () => {  
    db.query("SELECT id, name FROM department", function (err, results) {
        const empDepartment = results.map(role => {
            return `${role.id} ${role.name}`;
        });  
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
        choices: empDepartment, //populate here what departments there are from Department Table   
        },
     ])
     .then((response) => {
        // use response to add a role on Role Table
        let departmentId = response.department.split(' ').shift();

        let roleColumns = `(title, salary, department_id)`
        let employees = `VALUES 
            ("${response.role}", "${response.salary}", ${departmentId})`

        db.query(`INSERT INTO roles ${roleColumns} ${employees}`, (err, results) => {
            console.log(results);
        });

        userChoice();
    }) 
  })                            
}

const viewDepartments = () => { 
    // show department table
    db.query("SELECT * FROM department", function (err, results) {
        console.table(results)
    //Back to main menu
    userChoice();                            
});
}

userChoice();


// const addDepartments = () => {  
//     inquirer 
//       .prompt([
//         {
//         type: "input",
//         name: "department",
//         message: "What is the name of the department?",   
//         },
//      ])
//      .then((response) => {
//         // use response to add a department on Department Table


//         // db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
//         //     console.log(results);
//         // });
          
//         // db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
//         //     console.log(results);
//         // });
//         userChoice();
//     })                           
// }

// const iQuit = () => { 
//     // quits mysql
//     process.exit();
                             
// }
