angular.module('WebApp').filter("filterAmountIngredient", function(){
	return function(value){
		if (value != 0) {
			return value;
		} else {
			return "" ;
		}
	};
});