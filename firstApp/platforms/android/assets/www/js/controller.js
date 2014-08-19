angular.module('starter.controllers',[])
	.controller('ToDoListCtrl', function ($scope,$http) {
		
	  
	  
	  $scope.toDoListItems = [];
	  $http.get('http://lowata.com.au/api/contacts/').success(function(data, status){
		$scope.toDoListItems = data;
	  });
		/*

	  $scope.toDoListItems = [{
		task: 'Alex Smith',
		status: 'not done'
	  }, {
		task: 'Peter Wang',
		status: 'not done'
	  }]
	  */
});