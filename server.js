//server.js

//call the packages we need
var express 	= require('express');
var app		= express(); //define our app using express
var bodyParser 	= require('body-parser');

var Bear = require('./app/models/bear'); // pull in our own module

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/node-rest'); // connect to our database

//configure app to use bodyParser()
//grabs data from a POST request
app.use(bodyParser());

var port = process.env.PORT || 8080;

//ROUTES
var router = express.Router();

//router middleware for all requests
router.use(function(req, res, next) {
	//do logging
	console.log('Something is... happening!!.');
	next();//make sure we continue through the routes
});

//test route
router.get('/', function(req, res) {
	res.send('welcome to the api');
});

//more routes here

//register routes - prefix with /api
app.use('/api', router);

//start server
app.listen(port);
console.log('Magic happens on port ' + port);


