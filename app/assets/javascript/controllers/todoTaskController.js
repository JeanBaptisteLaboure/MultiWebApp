angular.module('WebApp').controller('TodoTaskController', function($scope, Todo){
	$scope.todos = Todo.query();
	$scope.isSubmitting = false;
	window.sc = $scope;

	$scope.saveTodo = function(){
        if (!$scope.newTodo || $scope.newTodo.length < 1) return;

		$scope.isSubmitting = true;
        var todo = new Todo({ name: $scope.newTodo, completed: false });

        todo.$save(function(){
          	$scope.todos.push(todo);
          	$scope.newTodo = ''; // clear textbox
        }).finally(function(){
			$scope.isSubmitting = false;
        });
    };

    $scope.isCompleted = function(value){
    	return value;
    };

    $scope.toggleState = function(index){
        var todo = $scope.todos[index];
        todo.completed = !todo.completed;
        Todo.update({id: todo._id}, todo);
    };
});