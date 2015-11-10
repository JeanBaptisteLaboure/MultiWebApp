angular.module("WebApp").directive('dPageNav', function(){
	return {
		replace: true,
		restrict: 'E',
		templateUrl: "assets/templates/directives/dPageNav.html",
		controller: function($scope, $location){
			
		}
	};
});