"use strict";
var http = require('http');
var express = require('express'); //routing
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var PORT=8080; 

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.text() );       // to support JSON-encoded bodies

//var database = require('./database.js');	
//database.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
  		res.sendFile(path.join(__dirname, 'public/index.html'));
	});
app.post('/getNote', function(req, res){
	console.log("key:" + req.body.key);
	if(req.body.key=="swag"){
		res.send("yeet");
	}
	else{
		res.send(false);
	}
});
app.post('/setNote', function(req, res){
	console.log("key:" + req.body.key);
	console.log("Note:" + req.body.note);
	res.send("yeet");
});
//start this bitch up
var server = app.listen(PORT, function(){
  console.log('Server listening on port');
});
//kill it when I say kill it
process.on('SIGINT', function() {
    process.exit();
});