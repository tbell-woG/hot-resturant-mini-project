var bodyParser = require('body-parser');
var express = require('express');

var path = require('path');
var fs = require('fs')

var app = express();
var PORT = process.env.PORT || 8080;

// Paths to HTML pages
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/home.html'));
})

app.get('/reservations', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/reserve.html'));
})

app.get('/booktable', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/tables.html'));
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});