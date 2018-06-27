var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var path = require("path");

var name = [];
var date = [];



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




//home
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });


//reservation
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });


// table
app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });




// put yo hearing aids in code!    
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



  