var mongoose = require("mongoose");

var RecipesSchema = new mongoose.Schema({
  	name: String,
  	img_name: String,
  	ingredients_list: Array,
  	preparation: String
});

module.exports = mongoose.model('Recipes', RecipesSchema, 'Recipes');