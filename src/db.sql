create database escuela;
use escuela;

CREATE TABLE alumnos(
    id int auto_increment,
    nombres varchar(30),
    apellidos varchar(30),
    sexo varchar(10),
    PRIMARY KEY (id)
);

CREATE TABLE cursos(
    id int auto_increment,
    nombre varchar(30),
    descripcion varchar(100),
    PRIMARY KEY (id)
);

CREATE TABLE alumnoscursos(
    alumno int,
    curso int,
    FOREIGN KEY (alumno) REFERENCES alumnos(id),
    FOREIGN KEY (curso) REFERENCES cursos(id)
);

CREATE TABLE notas(
    alumno int,
    curso int,
    pc1 int,
    pc2 int,
    pc3 int,
    parcial int,
    final int,
    promedio float,
    FOREIGN KEY (alumno) REFERENCES alumnos(id),
    FOREIGN KEY (curso) REFERENCES cursos(id)
);