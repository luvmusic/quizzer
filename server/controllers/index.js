var express = require('express')
  , router = express.Router()
 
// Parse the body data for easier access.
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// RE-ROUTE
router.use('/quiz', require('./quiz-controller'))

router.get('/', function(req, res) 
{
  res.redirect("../../client");
})

module.exports = router