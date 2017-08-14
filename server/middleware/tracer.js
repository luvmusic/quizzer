module.exports = function(request, response, next)
{
	var theRequest = request.method + " " + request.originalUrl
	
	var startTime = Date.now();

	console.log("Enter", theRequest);
	next();
	console.log("Exit", theRequest, "--->", Date.now() - startTime, "milliseconds to complete.");
};
