var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var path = require("path");

var reservation = [];
var tables = 0;




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

$('#click').click(function(e){
  e.preventDefault();
  tables++;


if(tables > 5){
  $('#reserve').text('sorry, nothing is available! Maybe next year');  
}else{
  $('#reserve').text('You should try the lottery, we have an opening!');
}
});











// put yo hearing aids in code!    
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



  