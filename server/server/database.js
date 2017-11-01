var connected = false;
var database;
exports.connect = function () {
	
    var MongoClient = require('mongodb').MongoClient, format = require('util').format;
	MongoClient.connect('mongodb://0.0.0.0:27017/dataBird', function(err, db) {
  		if(err) throw err;
    	connected = true;
    	database = db;
    	console.log("connected to mongoDB");
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