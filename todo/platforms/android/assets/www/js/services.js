angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  /*
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];
  */
  
  var friends = [];
	  $http.get('http://lowata.com.au/api/contacts/').success(function(data, status){
		friends = data;
	  });
	
	
  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
	  var fid = friendId - 1;
      return friends[fid];
    }
  }
});
