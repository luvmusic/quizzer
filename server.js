console.log("Starting the application...");
const DEFAULT_PORT = 8080;

// APPLICATION
var express = require("express");
//var path = require("path");
var app = express();
app.use(express.static(__dirname + '/client'));

// TRACING/LOGGING
var Tracer = require('./server/middleware/tracer');
app.use(Tracer);

// ERROR HANDLERS
app.use(function(err, req, res, next) 
{
	console.log("ERROR HANDLER 1");
	
	if(err.status !== 404) { return next(); }

  	res.status(404);
  	res.send(err.message || "Resource or page not found.");
});

app.use(function(err, req, res, next) 
{
	console.log("ERROR HANDLER 2");
	console.log(err);
	console.log(err.stack);
	
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// APPLICATION ROUTES BELOW
app.use(require('./server/controllers'));

// DEFAULT WHEN NO ROUTES ARE HIT
app.get('*', function(req, res, next) 
{
  var err = new Error();
  err.status = 404;
  next(err);
});

var server = app.listen(process.env.PORT || DEFAULT_PORT, function () 
{
	var port = server.address().port;
	console.log("App now running on port ", port);
});

// INITIALIZE THE APP
//var DBconnector = require('./server/helpers/db-connector.js');
//var dbUpAndRunning = false;
//DBconnector.connect(function(aReturnable)
//{
//	if (aReturnable.isFailure())
//	{
//		console.log("Database connection failure.");
//		console.trace(aReturnable.asLogString());
//		process.exit(1);
//	}
//	
//  	dbUpAndRunning = true;
//  	console.log("Database connection ready.", aReturnable.getMessage());
//});

//var UserSessionModel = require('./server/models/user-session-model');
//UserSessionModel.startSessionManager();

// START SERVER LISTENING WHEN THE DATABASE IS READY

//var server = null;
//var interval = setInterval( function() 
//{
//	if (!dbUpAndRunning)
//		console.log("Waiting for the database to be connected.");
//	else
//	{
//		server = app.listen(process.env.PORT || DEFAULT_PORT, function () 
//		{
//			var port = server.address().port;
//			console.log("App now running on port ", port);
//		});
//		
//		clearInterval(interval);
//	}			
//}, 500); // Half a second.	












