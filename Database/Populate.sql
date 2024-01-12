use UsersDB;

INSERT INTO TypeUsers (type_user) VALUES
('Personal'),	
('Employee'),
('Admin');

INSERT INTO Users (first_name, last_name, email, type_user) VALUES
('John', 'Gomez', 'john.gomez@example.com', 1),
('Anna', 'Martinez', 'anna.martinez@example.com', 1),
('Carlos', 'Lopez', 'carlos.lopez@example.com', 2),
('Laura', 'Fernandez', 'laura.fernandez@example.com', 2),
('Robert', 'Perez', 'robert.perez@example.com', 3),
('Elena', 'Sanchez', 'elena.sanchez@example.com', 1),
('Javier', 'Rodriguez', 'javier.rodriguez@example.com', 3),
('Maria', 'Garcia', 'maria.garcia@example.com', 1),
('Sara', 'Diaz', 'sara.diaz@example.com', 1),
('Alejandro', 'Ruiz', 'alejandro.ruiz@example.com', 1);

