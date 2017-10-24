// (function () {
// 	myApp.controller('loginNormalCtr', function($scope, $http){
// 		$scope.user = {
// 			username:undefined,
// 			password: undefined
// 		}
// 		$scope.submit = function (isValid) {
// 			if(!isValid) return;
			
// 			// HTTP POST Tương tự như $.post của ajax 
// 			$http.post("/router-post-to-server",{user:$scope.user},{}).then(function(res){
	  			
// 	  			// MESSAGE PHAN HOI TU SERVER
// 	  			console.log(res.data);
// 	  		});
// 		}
// 	});
// })(); 