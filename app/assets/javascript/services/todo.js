angular.module('WebApp').factory('Todo', function($resource){
	return $resource('/todos/:id', null, {
		update: {
			method: "PUT"
		}
	});
});