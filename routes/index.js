var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/***********************************************
* Template for new routes                      *
*router.get('/routeName', functionName);       *
*router.post('/routeName', functionName);      *
* when you have both post and get              *
*router.use('/routeName', functionName);       *
***********************************************/
router.get('/test',function(req,res){
  console.log("dafdsf");
  res.sendStatus(200);
});
router.post('/test',function(req,res){
  console.log("i got to the test");
  res.sendStatus(200);
});
module.exports = router;
