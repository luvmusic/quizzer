const constants = require("../helpers/application-constants.js");
var SessionModel = require("../models/user-session-model.js");

module.exports =  function(request, response, next)
{
	console.log("Authentication intercept.");
	
	var sessionID = request.headers[constants.SESSIONID_HEADERKEY];
	
	console.log("Session ID =", sessionID);
	
	SessionModel.verifyActiveSession(sessionID, function(aReturnable)
	{
		if (aReturnable.isSuccessful())
		{
			console.log("VERIFIED");
			next();
		}
		else
		{
			console.log("NOT VERIFIED");
			
			response.status(401); //HTTP CODE - UNAUTHORIZED
			response.send("Not logged in.");
		}
	});
};


