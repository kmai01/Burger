DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

    id INT NOT NULL AUTO_INCREMENT,
    burger VARCHAR(255) NOT NULL,
    devoured BOOLEAN,

    PRIMARY KEY(id)

);

