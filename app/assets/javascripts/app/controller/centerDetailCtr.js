(function () {
	myApp.controller('centerDetailCtr', function($scope, $http, NgMap){
		NgMap.getMap().then(function(map) {
	      $scope.map = map;
	    });
	});
})(); 