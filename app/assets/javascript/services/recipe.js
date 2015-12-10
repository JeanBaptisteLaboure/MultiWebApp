angular.module('WebApp').factory('Recipe', function($resource){
	return $resource('/recipe/:id', null, {
		update: {
			method: "PUT"
		}
	});
});