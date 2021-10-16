USE employee_tracker;

INSERT INTO department (name)
    VALUES  ("Engineering"),
            ("Sales"),
            ("Finance"),
            ("Legal"),
            ("Executive");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  ("david", "jay", 1, 1),
            ("John", "Doe", 2, 3),
            ("Michael", "Myers", 1, 2),
            ("Freddy", "Krugar", 2, 1),
            ("Charles", "Manson", 3, 1),
            ("Ted", "Bundy", 2, 1),
            ("Richard", "Ramirez", 1, 1);
       
INSERT INTO role (title, salary, department_id)
    VALUES  ("engineer", 50000, 2),
            ("Accountant", 50000, 2),
            ("Software Developer", 150000, 1),
            ("Project Manager", 120000, 3),
            ("Designer", 100000, 2),
            ("Salesperson", 90000, 2);
               
       