$(document).ready(function () {

  //nav-mobile
  mobileNav();

  //section menu magellan
  // Cache selectors
  var lastId,
    navTop = $("#nav-top"),
    navTopHeight = navTop.outerHeight(),
    navMenu = $(".nav-menu"),
    // All list items
    navLinks = navMenu.find(".nav-link"),
    // Anchors corresponding to menu items
    scrollItems = navLinks.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });
  // console.log(navLinks.length);
  // console.log(scrollItems.length);
  // console.log(navTopHeight);
  // console.log(navTopBottom);

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  navLinks.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - navTopHeight + 1;
    $("html, body").stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });

  //Bind to scroll
  $(window).scroll(function () {
    //Get container scroll position
    var fromTop = $(this).scrollTop() + (navTopHeight * 4);
    //Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    //Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
      lastId = id;
      // Set/Remove active class
      navLinks
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });

  //END DOCUMENT READY
});



/* -------------------------------- Mobile Navigation --------- */
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
/* -------------------------------- Mobile Navigation --------- */


/* -------------------------------- Magellan Navigation ------- */
/*
 * Magellan Navigation is when your sections and menu button's 
 * are in sync with each other
 */