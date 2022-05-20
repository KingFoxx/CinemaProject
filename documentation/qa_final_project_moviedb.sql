-- if you mess up just run line number 3 (remove comment tag first) and then re-run
-- the whole sql again, that will repopulate the tables and their entries
drop schema moviedb;

create schema if not exists moviedb;

use moviedb;

create table movie(
	id int auto_increment primary key,
    name varchar(255) not null,
    genre varchar(40) not null,
    classification varchar(20) not null,
    price varchar(6) not null,
    concession varchar(6) not null
);

create table customer(
	id int auto_increment primary key,
    name varchar(255) not null,
    address varchar(255) not null,
    user_name varchar(255) not null,
    password varchar(255) not null
);

create table booking(
	id int auto_increment primary key,
    customer_id int not null,
    movie_id int not null,
    date DATE,
    time TIME,
    adults int not null,
    children int,
    cost varchar(10) not null,
    num_seats int not null,
    paid bool default 0,
    foreign key (customer_id) references customer(id),
    foreign key (movie_id) references movie(id)
);

create table discussion(
	id int auto_increment primary key,
	customer_id int not null,
    movie_id int not null,
    title varchar(40) not null,
    rating int,
    description varchar(255) not null,
    foreign key (customer_id) references customer(id),
    foreign key (movie_id) references movie(id)
);

create table payment(
	id int auto_increment primary key,
    customer_id int not null,
    booking_id int not null,
    amount int not null,
    card varchar(20) not null,
    expiry int not null,
    security int not null,
    foreign key (customer_id) references customer(id),
    foreign key (booking_id) references booking(id)
);

insert into customer(name, address, user_name, password) values("mat", "abc", "cool", "pass");
insert into customer(name, address, user_name, password) values("dev", "ijk", "manager", "pass");
insert into customer(name, address, user_name, password) values("sal", "xyz", "nobody", "pass");
insert into customer(name, address, user_name, password) values("Guest", "guest", "Guest", "Guest");

insert into movie(name, genre, classification, price, concession) values("Spider-Man", "action", "PG", "5.99", "3.99");
insert into movie(name, genre, classification, price, concession) values("BatMan", "action", "PG", "5.99", "3.99");
insert into movie(name, genre, classification, price, concession) values("Top Gun", "drama", "pegi14", "5.99", "3.99");
insert into movie(name, genre, classification, price, concession) values("The Weekend Away", "comedy", "pegi12", "5.99", "3.99");

insert into discussion(customer_id, movie_id, title, rating, description) 
    values(1, 2, 'Awesome', 3, 'Good movie!');

insert into booking(customer_id, movie_id, adults, children, cost, num_seats) values(1, 2, 4, 1, "2.9", 6);