(function () {
	myApp.controller('registerNormalCtr', function($scope, $http){
		$scope.user = {
			firstName: undefined,
			lastName: undefined,
			username: undefined,
			email: undefined,
			password: undefined,
			passwordConfirm: undefined,
		}
		$scope.submit = function (isValid) {
			if(!isValid) return;
			// HTTP POST Tương tự như $.post của ajax 
			$http.post("/router-post-to-server",{user:$scope.user},{}).then(function(res){
	  			
	  			// MESSAGE PHAN HOI TU SERVER
	  			console.log(res.data);
	  		});
		}

		//TRuyền vào mảng các object validate cho 1 input
		//Ở đây hiện tại chỉ có 1 hàm check password và confirm password có giống nhau hay ko ?
		$scope.confirmPasswordValidation = [{
			func:function(val,cb){
				if(val == $scope.user.password){
					cb(this.name,true);
				}else{
					cb(this.name, false);
				}
			},
			name:'confirm_password',
			message:'Mật khẩu không khớp'
		}];
	});
})(); 