(function () {
	var template="";
	template += "<div class=\"rateShow\">";
	template += "	<div style=\"width: 15%;float: left;\">";
	template += "		<span class=\"bold\">{{rTitle}}<\/span class=\"bold\">";
	template += "		<img src=\"{{vIcon}}\" width=\"19\" height=\"19\" class=\"animated rotateIn\">";
	template += "	<\/div>";
	template += "	<div style=\"width: 73%;float: left;\" class=\"progress progress-striped active animated flipInX\">";
	template += "		<div class=\"progress-bar progress-bar-custom\" style=\"width: {{rValue\/rValueMax*100 + 1}}%;background-color: {{rBackground}};\">";
	template += "			<span class=\"text-in-progress-bar bold\">{{rValue}} <i class=\"fa fa-user-circle\"><\/i><\/span>";
	template += "		<\/div>";
	template += "	<\/div>";
	template += "	<div style=\"clear: both;\"><\/div>";
	template += "	";
	template += "	<style type=\"text\/css\">";
	template += "		.rateShow .progress-bar-custom:last-child.progress-bar:before , .rateShow .progress{";
	template += "			background: none;";
	template += "		}";
	template += "		.rateShow .progress {";
	template += "			height: 20px;";
	template += "			margin-bottom: 13px;";
	template += "		}";
	template += "		.rateShow .progress-bar-custom{";
	template += "			text-align: left;";
	template += "		}";
	template += "		.rateShow .text-in-progress-bar{";
	template += "			padding-left: 10px;";
	template += "			color: #666666;";
	template += "			display: block;";
	template += "			min-width: 45px;";
	template += "		}";
	template += "	<\/style>";
	template += "<\/div>";
	myApp.directive('rateShow', function(){
		return{
			restrict: 'AEM',
			template:template,
			// templateUrl:'/mock/app/directive/rateShow/template.html',
			replace: true,
			scope:{
				rBackground:'@',
				rTitle:'@',
				vIcon:'@',
				rValue:'=',
				rValueMax:'='
			},
			link: function(scope, elements, attrs){
			},
			transclude: true
		}
	});
})(); 