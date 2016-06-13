var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var facebook = require('./helpers/facebook');
var app = module.exports.app = exports.app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test", function (err) {
  if(err){
    console.log(err);
  } else {
    console.log('mongo connected');
  }
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes.initialize(app);
app.use('/', require('./routes'));

var home = [	'<html>',
		'<head><title></title></head>',
		'<body>',
		'<h1></h1>',
		'<br /><h3></h3>',
		'<h4>/</h4> ',
		'<h4>/</h4> ',
		'</body></html>'].join('');

app.get('/', function(req, res){
  res.send(home);
});

app.get('*', function(req,res){
  res.send('404');
});

var apiFeed = function(){
  facebook();
}

app.listen(3000, "0.0.0.0", function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("listening to port:   " + 3000);
  apiFeed();
});
