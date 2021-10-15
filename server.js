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

const enterManager = () => { //inquire prompt 
    inquirer 
     .prompt([
         {
         type: "input",
         name: "name",
         message: "What is the team managers name?",   
         },
         {
         type: "input",
         name: "id",
         message: "What is the team managers employee ID number?",   
         },
         {
         type: "input",
         name: "email",
         message: "What is the team managers email address?",   
         },
         {
         type: "input",
         name: "officeNumber",
         message: "What is the team managers office number?",   
         },
     ])
     .then((response) => {

        db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
            console.log(results);
        });
          
        db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
            console.log(results);
        });
        userChoice();
    })                           
}

function userChoice() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "fork",
                message: "Would you like to add an Engineer or an Intern to the team?",
                choices:["Add Engineer", "Add Intern", "Nothing to add"],
            },
        ])
        .then((response) => {
            if (response.fork === "Add Engineer") {
                enterEngineer();
            } else if (response.fork === "Add Intern") {
                enterIntern();
            } else {
                nothingAdded()
            }
        })
}

enterManager();
