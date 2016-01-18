
// Scroll the Coder
$(window).scroll(function() {
  // Get scroll Y position
  var scrollY = $(window).scrollTop();
  var scrollingDiv = $('.code-box');

  scrollingDiv
    .stop()
    .animate({'marginTop': ((scrollY + 30)+'px')}, 'slow');
});