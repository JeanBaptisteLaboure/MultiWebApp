/*var express = require('express');
//var router = express.Router();

var mongoose = require('mongoose');
var recipe = require('../models/recipe.js');


module.exports = function(app) {
	app.get('/recipes', function(req, res) {
	  	recipe.find(function (err, todos) {
	    	console.log(todos);
	    	res.json(todos);
	  	});
	});
}*/

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Recipe = require('../models/Recipe.js');

/* GET /recipes listing. */
router.get('/', function(req, res, next) {
  	Recipe.find(function (err, recipes) {
	    if (err) return next(err);
	    res.json(recipes);
  	});
});
/* GET /recipes/:id listing. */
router.get('/:id', function(req, res, next) {
  	Recipe.findById(req.params.id, function (err, recipes) {
	    if (err) return next(err);
	    res.json(recipes);
  	});
});

/* POST /recipe */
router.post('/', function(req, res, next) {
  	Recipe.create(req.body, function (err, post) {
	    if (err) return next(err);
	    res.json(post);
  	});
});

/* PUT /recipes/:id */
router.put('/:id', function(req, res, next) {
  	Recipe.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	    if (err) return next(err);
	    res.json(post);
  	});
});

module.exports = router;