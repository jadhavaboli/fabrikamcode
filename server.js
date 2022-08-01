var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");

//server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("CAlling rest api");
  var person={firstName:'Ravi',lastName:'Tambade',age:47};
  res.send(person);
});
