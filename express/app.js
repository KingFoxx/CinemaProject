let express = require("express");
let bodyparser = require("body-parser");
let mysql = require("mysql");

let app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

// Create local connection to mysql "moviedb"
let db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "pass",
    database : "moviedb"
});

db.connect();

// To add an entry to the customer table
app.post("/customer/create",function(req, res) {
    let sqlQuery = `insert into customer(name, address) 
    values('${req.body.cus_name}', '${req.body.cus_address}')`;

    db.query(sqlQuery, function(err, results) {});
});

// To update a customer info (most likely their address)
app.post("/customer/update", function(req, res) {
    let sqlQuery = `update customer set name = '${req.body.cus_name}', 
    address = '${req.body.cus_address}' where id = ${req.body.cus_id}`;

    db.query(sqlQuery, function(err, results) {});
});

// To read all the data from customer table
app.get("/customer/readAll", function(req, res) {
    db.query(`select * from customer`, function(err, results) {
        res.json(results);
    });
});

// To read a single entry from the customer table (TODO: This needs to be amended per the front end implementation)
app.get("/customer/read", function(req, res) {
    db.query(`select * from customer where id = ${req.body.cus_id}`, function(err, results) {
        res.json(results);
    });
});

// To remove an entry from the customer table (TODO: This needs to be amended per the front end implementation)
app.get("/customer/remove", function(req, res) {
    db.query(`delete from customer where id = ${req.body.cus_id}`, function(err, results) {});
});

// To add an entry to the booking table
// Booking columns 'date' and 'time will be auto completed by the system, the 'paid' column
// have a '0' entry by default which will be changed to '1' once a customer completes payment
app.post("/booking/create",function(req, res) {
    let sqlQuery = `insert into booking(customer_id, movie_id, adults, children, seating) 
    values('${req.body.cus_id}', '${req.body.mov_id}', ${req.body.adults}, 
    ${req.body.children}, ${req.body.seating})`;

    db.query(sqlQuery, function(err, results) {});
});

// To update booking once payment has been made
app.post("/booking/update",function(req, res) {
    let sqlQuery = `update booking set paid = 1 where id = ${req.body.booking_id}`;

    db.query(sqlQuery, function(err, results) {});
});

// To add an entry to the discussion table
app.post("/discussion/create",function(req, res) {
    let sqlQuery = `insert into discussion(customer_id, movie_id, title, rating, description) 
    values(${req.body.cus_id}, ${req.body.mov_id}, '${req.body.title}', ${req.body.rating}, '${req.body.description}')`;

    db.query(sqlQuery, function(err, results) {
        res.json(results);
    });
});

// To update a posted discussion (TODO: may needs changing per the front end implementation)
app.post("/discussion/update", function(req, res) {
    let sqlQuery = `update discussion set rating = '${req.body.rating}', 
    description = '${req.body.description}' where id = ${req.body.dis_id}`;

    db.query(sqlQuery, function(err, results) {});
});

// To read all the data from the discussion table (use to populate discussion page)
app.get("/discussion/readAll", function(req, res) {
    db.query(`select * from discussion`, function(err, results) {
        res.json(results);
    });
});

// To read a single entry from the discussion table (TODO: This needs to be amended per the front end implementation)
app.get("/discussion/read", function(req, res) {
    db.query(`select * from discussion where id = ${req.body.dis_id}`, function(err, results) {
        res.json(results);
    });
});

// To remove an entry from the discussion table (TODO: This needs to be amended per the front end implementation)
app.get("/discussion/remove", function(req, res) {
    db.query(`delete from discussion where id = ${req.body.dis_id}`, function(err, results) {});
});

// NOTE: We are only going to implement "create" and "read" functionality for payment
// as we make a couple assumptions 
// 1. There are no refunds given so no table entry is deleted from payment
// 2. Payment details cannot be changed after payment is done so no update necessary

// Card number is a string since it's a long number that might cause problems with certain data types
// Card expiry is 4 digits with format 'YYMM'
// To add an entry to the payment table
app.post("/payment/create",function(req, res) {
    let sqlQuery = `insert into payment(customer_id, booking_id, amount, card, expiry, security) 
    values('${req.body.cus_id}', '${req.body.booking_id}', ${req.body.amount}, 
    '${req.body.card}', ${req.body.expiry}, ${req.body.security})`;

    db.query(sqlQuery, function(err, results) {});
});

// To read all the data from payment table
app.get("/payment/readAll", function(req, res) {
    db.query(`select * from payment`, function(err, results) {
        res.json(results);
    });
});

// To read a single entry from the payment table (TODO: This needs to be amended per the front end implementation)
app.get("/payment/read", function(req, res) {
    db.query(`select * from payment where id = ${req.body.pay_id}`, function(err, results) {
        res.json(results);
    });
});

app.listen(4040);