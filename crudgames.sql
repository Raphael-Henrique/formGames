CREATE DATABASE crudgames;
USE crudgames;

CREATE TABLE `games` (
	`idgames` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `cost` VARCHAR(45) NOT NULL,
    `category` VARCHAR(45) NOT NULL);
