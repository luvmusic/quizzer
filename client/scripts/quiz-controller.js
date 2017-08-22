const STANDARD_TIMEOUT_MS = 10000;

var quizController = function($scope) 
{
	this.scope = $scope;
	
	this.model =
	{
		topicList : []
	}
	
	this.fetchTopicList = function()
	{
		console.log("Starting fetchTopicList()");
		
		var url = "../quiz/topics";
		var config = {headers: {}, timeout : STANDARD_TIMEOUT_MS};
				
		var thisController = this;
		
		axios.get(url, config)
		.then(response =>
		{		
			console.log("Got data:", response.data);	
			thisController.model.topicList = response.data.topics;
		    thisController.scope.$apply(); //cause binding event notifications from asynch functions 			    
		})
		.catch(error =>
		{
			alert("There was an error.  " + error.message);
			thisController.model.topicList = [];
			thisController.scope.$apply(); //cause binding event notifications from asynch functions	  
		});					
	}
};

//========= SET UP THE APPLICATION ==============================

var Quizzer = angular.module("Quizzer", []);
Quizzer.controller('QuizController', ['$scope', quizController]);