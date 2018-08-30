$(document).ready(function () {

  //nav-mobile
  mobileNav();

  //END DOCUMENT READY
});



function mobileNav() {
  //hide the close button
  $(".menu-btn-close").hide();
  $(".menu-btn-open").click(function () {
    Open();
  });
  $(".menu-btn-close").click(function () {
    Close();
  });
  $(".mnav-link").click(function () {
    Close();
  });



}

function Open() {
  $("#mnav").slideToggle("slow", function () {
    $(".menu-btn-open").hide();
    $(".menu-btn-close").show();
    $("#mnav").show();
  });
}

function Close() {
  $("#mnav").slideToggle("slow", function () {
    $(".menu-btn-close").hide();
    $(".menu-btn-open").show();
    $("#mnav").hide();
  });
}