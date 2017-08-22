var Topic = 
{
	id : 0,
	label : ""
}

module.exports = 
{
	// Create new account.
	// callbackFunc has one parameter:	array of Topics
	getAll : function(callbackFunc)
	{
		var topics = [];
		
		topics.push({ id : 1, label : "History" });
		topics.push({ id : 2, label : "Science" });
		
		callbackFunc(topics);
	}
}