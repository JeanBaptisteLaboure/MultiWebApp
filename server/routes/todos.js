/*var express = require('express');
//var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');


module.exports = function(app) {
	app.get('/todos', function(req, res) {
	  	Todo.find(function (err, todos) {
	    	console.log(todos);
	    	res.json(todos);
	  	});
	});
}*/

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  	Todo.find(function (err, todos) {
	    if (err) return next(err);
	    res.json(todos);
  	});
});

/* POST /todo */
router.post('/', function(req, res, next) {
  	Todo.create(req.body, function (err, post) {
	    if (err) return next(err);
	    res.json(post);
  	});
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  	Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	    if (err) return next(err);
	    res.json(post);
  	});
});

module.exports = router;