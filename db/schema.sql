-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(30) NOT NULL,
devoured boolean NOT NULL,
date timestamp NOT NULL
PRIMARY KEY (id)
);

