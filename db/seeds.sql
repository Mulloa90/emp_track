INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mario', 'Ulloa', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Herbie', 'Smith', 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('James', 'Peach', 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Dwight', 'Howard', 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jason', 'Terry', 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Joe', 'Dirt', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Cheech', 'Chong', 5, null);

INSERT INTO department (department_name)
VALUES ('Management')
INSERT INTO department (department_name)
VALUES ('Developers')
INSERT INTO department (department_name)
VALUES ('IT')
INSERT INTO department (department_name)
VALUES ('HR')
INSERT INTO department (department_name)
VALUES ('Intern');

INSERT INTO role (title, salary, department_id)
VALUES ('General Manager', 450000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Software Developer', 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('IT Lead', 120000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('HR Specialist', 450000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ('Software Developer Intern', 70000, 5);

