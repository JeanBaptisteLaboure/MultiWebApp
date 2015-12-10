/**
* WebApp Module
*
* Description
*/
angular.module('WebApp').controller('RecipeController', function($scope, Recipe){
	$scope.currentRecipe = {};
	$scope.basePreparationRecipe = 4;

	Recipe.query().$promise.then(function(data){
		$scope.recipes = data;
		$scope.currentRecipe = data[0];
		$scope.basePreparationRecipe = data[0]['base_preparation'];
	});
	/*{
		name: "Lasagnes à la Bolognaise",
		img_name: "recipe_1.png",
		ingredients_list: [
			{ name: "paquet de pâtes à lasagnes", amount: 1},
			{ name: "oignons", amount: 3},
			{ name: "gousses d'ail", amount: 2},
			{ name: "branche de céleri", amount: 1},
			{ name: "carotte", amount: 1},
			{ name: "g viande de boeuf haché", amount: 600},
			{ name: "g purée de tomates", amount: 800},
			{ name: "verre d'eau", amount: 1},
			{ name: "verre à moutarde de vin rouge", amount: 1},
			{ name: "feuilles de laurier", amount: 2},
			{ name: "thym", amount: 0},
			{ name: "basilic", amount: 0}
		],
		preparation: "Emincez les oignons. Ecrasez l'ail. Hachez finement carotte et céleri. "+ 
			"Faire revenir ail et oignons dans un peu d'huile d'olive. Ajouter carotte et céleri. Puis la viande. Faire revenir le tout. Puis ajouter le vin rouge. Laisser s'évaporer."+
			"Ajouter la purée de tomates, le verre d'eau, et les herbes. Saler, poivrer, puis laisser mijoter à feu doux 45 min."+
			"Préparer la béchamel : faites fondre le beurre, puis, hors du feu, ajouter la farine d'un coup. Remettre sur le feu et remuer avec un fouet jusqu'à ce que cela devienne un mélange bien lisse."+
			"Ajouter le lait peu à peu. Remuer sans cesse, jusqu'à ce que le mélange s'épaississe. Ensuite, parfumer avec la muscade, salez, poivrez. Laisser cuire environ 5 min, feu très doux, en remuant. "+
			"Huilez le plat à lasagnes. Posez une fine couche de béchamel, puis : lasagnes, bolognaise, béchamel et parmesan, et cela 3 fois de suite. "+
			"Sur la dernière couche de lasagnes, ne mettre que de la béchamel et recouvrir de fromage râpé. Parsemer quelques noisettes de beurre."+
			"Faire cuire à 200°C pendant environ 25 min.",
	};*/

	$scope.changeRecipe = function(id){
		$scope.currentRecipe = Recipe.get({id: id});
	};


	window.sc = $scope;
});