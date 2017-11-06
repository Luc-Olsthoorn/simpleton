var connected = false;
var database;
exports.connect = function () {
	
    var MongoClient = require('mongodb').MongoClient, format = require('util').format;
    console.log("mongodb://database:27017/mydb");
	MongoClient.connect('mongodb://database:27017/mydb', function(err, db) {
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
exports.setup = function(){
	//Runs if the DB doesnt exist 
	collectionName= "myTable";
	database.collectionNames(collectionName, function(err, names) {
    	if(names.length <= 0){
    		database.createCollection(collectionName, function(err, res) {
		    if (err) throw err;
		    console.log("Collection created!");
		    database.close();
		  });
    	}
	});
}