$(document).ready(function() {
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  $(window).scroll(function() {
    changeToFixedForSidebar();
  });
  function changeToFixedForSidebar() {
    if($(window ).scrollTop() >= parseInt($(".center-header").css("height"))) {
      $("#sidebar-wrapper").addClass("toggle-fixed");
    } else {
      $("#sidebar-wrapper").removeClass("toggle-fixed");
    }
  };
});
