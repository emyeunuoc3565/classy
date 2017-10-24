(function () {
	var template="";
	template += "<div>";
	template += "	<button class=\"btn btn-danger blocks__name\">{{rTitle}}<\/button>";
	template += "";
	template += "    <ul class=\"blocks-content\">";
	template += "      <li class=\"blocks-content__content scroll-red\">";
	template += "      	<i class=\"blocks__content-close fa fa-close\"><\/i>";
	template += "        <div ng-transclude><\/div>";
	template += "    <\/ul>";
	template += "    <style type=\"text\/css\">";
	template += "		.blocks-content {";
	template += "		  list-style-type: none;";
	template += "		  margin: 0;";
	template += "		  padding: 0;";
	template += "		  position: absolute;";
	template += "		  bottom: 0;";
	template += "		  left: 0;";
	template += "		  height: 100vh;";
	template += "		  width: 0;";
	template += "		}";
	template += "		.blocks-content__content {";
	template += "		  will-change: transform, opacity;";
	template += "		  overflow-x: hidden;";
	template += "		  overflow-y: scroll;";
	template += "		  position: fixed;";
	template += "		  width: 100%;";
	template += "		  z-index: 3;";
	template += "		  top: 0;";
	template += "		  left: 0;";
	template += "		  height: 100vh;";
	template += "		  padding: 15px 0;";
	template += "		  text-align: left !important;";
	template += "		  font-size: 20px;";
	template += "		  opacity: 0;";
	template += "		  visibility: hidden;";
	template += "		  text-align: center;";
	template += "		  -webkit-transform: scale(0.9);";
	template += "		          transform: scale(0.9);";
	template += "		  -webkit-transition: all 0.3s 0.2s ease-out;";
	template += "		  transition: all 0.3s 0.2s ease-out;";
	template += "		  background: #fff;";
	template += "		}";
	template += "		.blocks-content__content.active {";
	template += "		  opacity: 1;";
	template += "		  -webkit-transform: scale(1);";
	template += "		          transform: scale(1);";
	template += "		  visibility: visible;";
	template += "		}";
	template += "		.blocks-content .blocks__content-close {";
	template += "		  z-index: 9;";
	template += "		  position: absolute;";
	template += "		  right: 2vw;";
	template += "		  top: 2vh;";
	template += "		  font-size: 30px;";
	template += "		  cursor: pointer;";
	template += "		  -webkit-transition: all 0.2s ease-out;";
	template += "		  transition: all 0.2s ease-out;";
	template += "		}";
	template += "		.blocks-content .blocks__content-close:hover {";
	template += "		  -webkit-transform: scale(1.1);";
	template += "		          transform: scale(1.1);";
	template += "		}";
	template += "		.blocks-content p {";
	template += "		  font-size: 16px;";
	template += "		  line-height: 2;";
	template += "		  max-width: 800px;";
	template += "		}";
	template += "		.blocks-content h2 {";
	template += "		  padding: 15px 30px;";
	template += "		  font-weight: 300;";
	template += "		  letter-spacing: 6px;";
	template += "		  box-shadow: inset 0 0 0 3px #000;";
	template += "		}";
	template += "		.blocks-names {";
	template += "		  position: fixed;";
	template += "		  bottom: 0;";
	template += "		  left: 0;";
	template += "		  z-index: 2;";
	template += "		  width: 100%;";
	template += "		  list-style-type: none;";
	template += "		  margin: 0;";
	template += "		  padding: 0;";
	template += "		  display: -webkit-box;";
	template += "		  display: -ms-flexbox;";
	template += "		  display: flex;";
	template += "		  font-size: 18px;";
	template += "		  letter-spacing: 4px;";
	template += "		  cursor: pointer;";
	template += "		  -webkit-transition: all 0.15s ease-out;";
	template += "		  transition: all 0.15s ease-out;";
	template += "		}";
	template += "    <\/style>";
	template += "<\/div>";
	template += "";
	template += "    ";

	myApp.directive('materialReview', function(){
		return{
			restrict: 'AEM',
			// templateUrl:'/mock/app/directive/materialReview/template.html',
			template:template,
			replace: true,
			scope:{
				rTitle:'@',
			},
			link: function(scope, elements, attrs){
				(function() {
					  var bHeight, bWidth, block, bname, closeBtn, closeContent, content, expand, openContent, updateValues, wHeight, wWidth, xVal, yVal;

					  block = $('.blocks__block');

					  bname = $('.blocks__name');

					  content = $('.blocks-content__content');

					  closeBtn = $('.blocks__content-close');

					  wHeight = $(window).outerHeight();

					  wWidth = $(window).outerWidth();

					  bHeight = block.outerHeight();

					  bWidth = block.outerWidth();

					  xVal = Math.round(wWidth / bWidth) + 0.03;

					  yVal = wHeight / bHeight + 0.03;

					  expand = function() {
					    var aBlock, num;
					    num = $(this).index();
					    aBlock = block.eq(num);
					    if (!aBlock.hasClass('active')) {
					      bname.css('opacity', '0');
					      aBlock.css({
					        'transform': 'scale(' + xVal + ',' + yVal + ')',
					        '-webkit-transform': 'scale(' + xVal + ',' + yVal + ')'
					      });
					      aBlock.addClass('active');
					      openContent(num);
					    }
					  };

					  openContent = function(num) {
					    var aContent;
					    content.css({
					      'transition': 'all 0.3s 0.4s ease-out',
					      '-webkit-transition': 'all 0.3s 0.4s ease-out'
					    });
					    aContent = content.eq(num);
					    aContent.addClass('active');
					  };

					  closeContent = function() {
					    bname.css('opacity', '1');
					    content.css({
					      'transition': 'all 0.1s 0 ease-out',
					      '-webkit-transition': 'all 0.1s 0 ease-out'
					    });
					    block.css({
					      'transform': 'scale(1)',
					      '-webkit-transform': 'scale(1)'
					    });
					    block.removeClass('active');
					    content.removeClass('active');
					  };

					  updateValues = function() {
					    var yVal;
					    var xVal;
					    var bWidth;
					    var bHeight;
					    var wWidth;
					    var wHeight;
					    var aBlock;
					    if (block.hasClass('active')) {
					      aBlock = $('.blocks__block.active');
					      wHeight = $(window).height();
					      wWidth = $(window).width();
					      bHeight = block.height();
					      bWidth = block.width();
					      xVal = Math.round(wWidth / bWidth) + 0.03;
					      yVal = wHeight / bHeight + 0.03;
					      aBlock.css({
					        'transform': 'scale(' + xVal + ',' + yVal + ')',
					        '-webkit-transform': 'scale(' + xVal + ',' + yVal + ')'
					      });
					    }
					  };

					  $(window).on('resize', updateValues);

					  bname.on('click', expand);

					  closeBtn.on('click', closeContent);

					}).call(this);

			},
			transclude: true
		}
	});
})();