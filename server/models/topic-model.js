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
		
		topics.push({ id : 1, label : "League of Legends" });
		topics.push({ id : 2, label : "World of Warcraft" });
		topics.push({ id : 3, label : "Stephon is Nerd" });
		
		callbackFunc(topics);
	}
}