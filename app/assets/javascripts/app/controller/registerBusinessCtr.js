(function () {
	myApp.controller('registerBusinessCtr', function($scope, $http){
		$scope.user = {
			firstName: undefined,
			lastName: undefined,
			username: undefined,
			email: undefined,
			password: undefined,
			passwordConfirm: undefined,
		}
		$scope.center = {
			name: undefined,
			phone: undefined,
			website: undefined,
			fanpage: undefined
		}
		$scope.submitUser = function (isValid) {
			if(!isValid) return;
			
			// Show ra form dang ky center 
			$scope.showForm='center';
		}

		$scope.submitCenter = function(isValid){
			if(!isValid || $scope.fanpageLoading) return;
			alert('submit to server')
		}



		

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

		$scope.checkIsFanpageValidation = [{
			func:function(val,cb){
				$scope.fanpageLoading = true;
				if(val=="" || val==undefined){
					$scope.fanpageLoading = false;
					return cb('is_fanpage', true);
				}
				FB.api(val + '/?access_token=EAAVb8MFvZCKkBACM1YqMiSbNPaMGhO8gvHQo2dqKZC7ttZBcapzg2lgbvYSKTIB8YKA76CZAjA0VMPw52ZBTuY8sPGXivF7MVIZBQ9ub9cZAXc7FAcBpsSqLRxTYq0M4WIS8G07nsqZC4hZBwbco8nlW99cF4kZBORFAVh6anmW90qQTnRf8XsLKv4', function(response) {
					if(!response.error) {
						cb('is_fanpage',true);
					}else{
						cb('is_fanpage', false);
					}
					$scope.fanpageLoading = false;
					FB.XFBML.parse(document.getElementById('fanpagePreview'));
					$scope.$apply();
			    });
			},
			name:'is_fanpage',
			message:'Không phải fanpage Facebook'
		}]

		$scope.phoneValidation = [{
			func:function(val,cb){
				function checkPhoneNumber(phone) {
				    var flag = false;
				    if(!phone) return flag;
				    phone = phone.replace('(+84)', '0');
				    phone = phone.replace('+84', '0');
				    phone = phone.replace('0084', '0');
				    phone = phone.replace(/ /g, '');
				    if (phone != '') {
				        var firstNumber = phone.substring(0, 2);
				        if ((firstNumber == '09' || firstNumber == '08') && phone.length == 10) {
				            if (phone.match(/^\d{10}/)) {
				                flag = true;
				            }
				        } else if (firstNumber == '01' && phone.length == 11) {
				            if (phone.match(/^\d{11}/)) {
				                flag = true;
				            }
				        }
				    }
				    return flag;
				}
				cb(this.name, checkPhoneNumber(val)); 	
			},
			name:'is_phone_number',
			message:'Không phải số điện thoại'
		}];
	});
})(); 

