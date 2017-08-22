var express = require('express')
  , router = express.Router()
  , Quiz = require('../models/quiz-model')
  , Topics = require('../models/topic-model.js')
//  , auth = require('../middleware/authenticator')
//  , activityLogger = require("../middleware/user-activity-logger.js")

// Expects a topic in the request body
router.post('/new', function(req, res, next) 
{
	console.log("Quiz controller post new.")

	try
	{
		Quiz.create(req.body.topic, function (aQuiz) 
		{
			console.log("Quiz.create() callback.")			
			res.json(aQuiz);
		});		
	}
	catch(error)
	{
		res.status(500);
		return next(error);
	}
})

router.get('/topics', function(req, res, next) 
{
	console.log("Quiz controller get topics.")

	try
	{
		Topics.getAll(function(topicsArray) 
		{
			console.log("Topics.getAll() callback.")			
			res.json({topics : topicsArray})
		});
	}
	catch(error)
	{
		res.status(500);
		return next(error);
	}		
})

module.exports = router