angular.module('WebApp').config(function($routeProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/index'
		})
		.when('/index', {
			templateUrl: "assets/templates/index.html",
			controller: "IndexController"
		})
		.when('/todoTask', {
			templateUrl: "assets/templates/todoTask/index.html",
			controller: "TodoTaskController"
		});
});