var express = require('express')
  , router = express.Router()

router.get('/', function(req, res) 
{
  res.redirect("../../client/index.html");
})

module.exports = router