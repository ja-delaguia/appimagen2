CREATE DATABASE dbUsuarios;
USE dbUsuarios;
CREATE TABLE Usuarios(
    id INT (3) not NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (200),
    imagen VARCHAR (350)
);
