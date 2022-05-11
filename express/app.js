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

// To read a single entry from the custoemr table (TODO: This needs to be amended per the front end implementation)
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
    let sqlQuery = `insert into discussion(customer_id, movie_id, rating, description) 
    values('${req.body.cus_id}', '${req.body.mov_id}', ${req.body.rating}, '${req.body.description}')`;

    db.query(sqlQuery, function(err, results) {});
});

// To update a posted discussion (TODO: may needs changing per the front end implementation)
app.post("/discussion/update", function(req, res) {
    let sqlQuery = `update discussion set rating = '${req.body.rating}', 
    description = '${req.body.description}' where id = ${req.body.id}`;

    db.query(sqlQuery, function(err, results) {});
});
