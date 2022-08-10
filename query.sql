CREATE DATABASE PRODUCT;

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    stoct INT NOT NULL,
    price INT NOT NULL,
);

CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

SELECT * FROM category;

select * from category where id=13;

INSERT INTO category(id,name) VALUES(13,’kursi’);

UPDATE category SET name ='makanan' WHERE id=13;

DELETE FROM category WHERE id=13;