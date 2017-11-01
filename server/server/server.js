"use strict";
var http = require('http');
var express = require('express'); //routing
var app = express();
var path = require('path');


var PORT=8080; 



var database = require('./database.js');	
database.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
  		res.sendFile(path.join(__dirname, 'public/home/home.html'));
	});

//start this bitch up
var server = app.listen(PORT, function(){
  console.log('Server listening on port');
});
