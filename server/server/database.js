var connected = false;
var database;
exports.connect = function (callback) {
	
    var MongoClient = require('mongodb').MongoClient, format = require('util').format;
    console.log("mongodb://database:27017/mydb");
	MongoClient.connect('mongodb://database:27017/mydb', function(err, db) {
  		if(err) throw err;
    	connected = true;
    	database = db;
    	console.log("connected to mongoDB");
    	callback();
	});
}
exports.query = function (){
	if(connected)
	{
		return database;
	}
	else 
	{
		console.log("database not connected");
	}
}
exports.setup = function(){
	//Runs if the DB doesnt exist 
	
}