const constants = require("../helpers/application-constants.js");
var SessionModel = require("../models/user-session-model.js");
var LogModel = require("../models/application-log-model.js");

module.exports =  function(request, response, next)
{
	var sessionID = request.headers[constants.SESSIONID_HEADERKEY];
	
	//Log actual activity (i.e. the request) in logger.
	var activity =
	{
		requestMethod: request.method,
		requestURL: request.originalUrl,
//HIDE PASSWORD		requestBody: request.body,
		requestParams: request.params
	};
	
	LogModel.logActivity(sessionID, activity);

	// Update last activity timestamp in the user session.
	if (sessionID === null)
		next();
		
	SessionModel.logActivity(sessionID, function(aReturnable)
	{
		if (aReturnable.isSuccessful())
		{

			next();
		}
		else
		{
			response.status(500); //HTTP CODE - INTERNAL SERVER ERROR
			response.send("Error.");
		}
	});
};
