var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
  {
    customerName: "John M.",
    phoneNumber: "000-000-0000",
    customerEmail: "jm@hotmail.com",
    customerID: "1"
  },
  {
    customerName: "Liam W.",
    phoneNumber: "111-111-1111",
    customerEmail: "lw@hotmail.com",
    customerID: "2"
  },
  {
    customerName: "Tomas G.",
    phoneNumber: "222-222-2222",
    customerEmail: "tg@hotmail.com",
    customerID: "3"
  },
  {
    customerName: "Val A.",
    phoneNumber: "333-333-3333",
    customerEmail: "va@hotmail.com",
    customerID: "4"
  }
];

var waitList = [];

// Home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Add table
app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// View tables
app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// API tables
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

//
app.get("/api/waitlist", function(req, res) {
  return res.json(waitList);
});

app.post("/api/waitlist", function(req, res) {
  return res.end();
});

app.post("/api/tables", function(req, res) {
  var newReservation = req.body;
  // console.log(req.body);
  // console.log(req);

  if (tables.length < 5) {
    tables.push(newReservation);
  } else {
    waitList.push(newReservation);
  }

  return res.end();
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
