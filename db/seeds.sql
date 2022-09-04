USE employee_db;

INSERT INTO department (name)
VALUES ('Management'), ('Developers'), ('IT'), ('HR'), ('Intern');


INSERT INTO role (title, salary, department_id)
VALUES ('General Manager', 450000, 1),('Software Developer', 150000, 2), 
('IT Lead', 120000, 3),('HR Specialist', 450000, 4),
('Software Developer Intern', 70000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mario', 'Ulloa', 1, 1),('Herbie', 'Smith', 2, null),('James', 'Peach', 3, 2),
('Dwight', 'Howard', 4, null),('Jason', 'Terry', 3, 2),
('Joe', 'Dirt', 2, 1),('Cheech', 'Chong', 5, null);
