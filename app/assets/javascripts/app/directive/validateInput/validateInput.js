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