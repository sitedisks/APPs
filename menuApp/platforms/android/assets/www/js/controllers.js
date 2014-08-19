angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$http) {
  $scope.playlists = [];
	  $http.get('http://lowata.com.au/api/contacts/').success(function(data, status){
		$scope.playlists = data;
	  });
})

.controller('PlaylistCtrl', function($scope, $stateParams, $http) {
	var fid = $stateParams.playlistId;
	var uri = 'http://lowata.com.au/api/contacts/' + fid;
	$scope.playlist = null;
	$http.get(uri).success(function(data, status){
		$scope.playlist = data;
	  });
});
