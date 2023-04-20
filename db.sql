DROP DATABASE IF EXISTS shopping_list;

CREATE DATABASE shopping_list;

\c shopping_list;

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY, -- generate a unique id and auto increment by 1
    item_name VARCHAR(12) NOT NULL -- string that can be no more than 12 characters long
);