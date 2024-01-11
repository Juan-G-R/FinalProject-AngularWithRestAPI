use usersDb;

INSERT INTO TypeUsers (type_user) VALUES
('Personal'),	
('Employee'),
('Admin');

INSERT INTO Users (first_name, last_name, email, type_user) VALUES
('Juan', 'Gómez', 'juan.gomez@example.com', 1),
('Ana', 'Martínez', 'ana.martinez@example.com', 1),
('Carlos', 'López', 'carlos.lopez@example.com', 2),
('Laura', 'Fernández', 'laura.fernandez@example.com', 2),
('Roberto', 'Pérez', 'roberto.perez@example.com', 3),
('Elena', 'Sánchez', 'elena.sanchez@example.com', 1),
('Javier', 'Rodríguez', 'javier.rodriguez@example.com', 3),
('María', 'García', 'maria.garcia@example.com', 1),
('Sara', 'Díaz', 'sara.diaz@example.com', 1),
('Alejandro', 'Ruíz', 'alejandro.ruiz@example.com', 1);
