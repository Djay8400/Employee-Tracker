USE employee_tracker;

INSERT INTO department (name)
    VALUES  ("Engineering"),
            ("Sales"),
            ("Finance"),
            ("Legal"),
            ("Executive");

INSERT INTO roles (title, salary, department_id)
    VALUES  ("engineer", 50000, 1),
            ("Accountant", 50000, 2),
            ("Software Developer", 150000, 3),
            ("Project Manager", 120000, 4),
            ("Designer", 100000, 5),
            ("Salesperson", 90000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  ("Jane", "Doe", 1, NULL),
            ("John", "Doe", 2, 1),
            ("Michael", "Myers", 3, 2),
            ("Freddy", "Krugar", 4, 1),
            ("Charles", "Manson", 5, 2),
            ("Ted", "Bundy", 2, 1),
            ("Richard", "Ramirez", 6, 3);
       

               
       