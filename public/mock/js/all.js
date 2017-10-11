var myApp;
(function () {
	myApp = angular.module('myApp',['ui.bootstrap','ngSanitize']);
})(); 
(function () {
	myApp.controller('loginNormalCtr', function($scope, $http){
		$scope.user = {
			username:undefined,
			password: undefined
		}
		$scope.submit = function (isValid) {
			if(!isValid) return;
			
			// HTTP POST Tương tự như $.post của ajax 
			$http.post("/router-post-to-server",{user:$scope.user},{}).then(function(res){
	  			
	  			// MESSAGE PHAN HOI TU SERVER
	  			console.log(res.data);
	  		});
		}
	});
})(); 
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
(function () {
	var strVar="";
	strVar += "<div class=\"validate-input\">";
	strVar += "	<input type=\"{{vType}}\" class=\"form-control\" placeholder=\"{{vPlaceholder}}\" name=\"{{vName}}\" ng-model=\"vModel\" tooltip-enable=\"{{!vForm[vName].$valid}}\" tooltip-placement=\"{{vTooltipPlacement}}\" uib-tooltip-template=\"'validate.html'\" ng-class=\"!vForm[vName].$valid&&vForm.$submitted?'err':''\" ng-required=\"{{vRequired}}\" ng-minlength=\"{{vMinLength}}\" ng-maxlength=\"{{vMaxLength}}\" ng-min=\"{{vMin}}\" ng-max=\"{{vMax}}\">";
	strVar += "	<!-- VALIDATE TEN KHOA HOC -->";
	strVar += "	<script type=\"text\/ng-template\" id=\"validate.html\">";
	strVar += "		<div ng-show=\"vForm[vName].$error.required\">Không được bỏ trống<\/div>";
	strVar += "		<div ng-show=\"vForm[vName].$error.email\">Phải là email<\/div>";
	strVar += "		<div ng-show=\"vForm[vName].$error.minlength\">Lớn hơn {{vMinLength}} ký tự<\/div>";
	strVar += "		<div ng-show=\"vForm[vName].$error.maxlength\">Nhỏ hơn {{vMaxLength}} ký tự<\/div>";
	strVar += "		<div ng-show=\"vForm[vName].$error.min\">Lớn hơn {{vMin}}<\/div>";
	strVar += "		<div ng-show=\"vForm[vName].$error.max\">Nhỏ hơn {{vMax}}<\/div>";
	strVar += "		<div ng-repeat=\"validation in vCustomValidations\">";
	strVar += "			<div ng-show=\"vForm[vName].$error[validation.name]\">{{validation.message}}<\/div>";
	strVar += "		<\/div>";
	strVar += "	<\/script>";
	strVar += "	<!-- END -->";
	strVar += "<\/div>";
	myApp.directive('validateInput', function(){
		return{
			restrict: 'AEM',
			template: strVar,
			replace: true,
			scope:{
				vModel: '=',
				vForm: '=',
				vName: '@',
				vType: '@',
				vPlaceholder: '@',
				vTooltipPlacement: '@',
				vRequired: '@',
				vMinLength: '@',
				vMaxLength: '@',
				vMin: '@',
				vMax: '@',
				vCustomValidations : '='
			},
			link: function(scope, elements, attrs){
				if(!scope.vCustomValidations) return;
				scope.$watch('vModel', function(newValue, oldValue) {
	                for(var i = 0; i < scope.vCustomValidations.length; i++){
						scope.vCustomValidations[i].func(newValue,function(name, isValid){
			                scope.vForm[scope.vName].$setValidity(name, isValid);
						});
					}
	            });
			},
			transclude: true,
			controller: function($scope){
			}
		}
	});
})(); 