
// Scroll the Coder
$(window).scroll(function() {
  // Get scroll Y position
  var scrollY = $(window).scrollTop();
  var scrollingDiv = $('.code-box');

  // If scroll passes 100px vertically down, then begin animation
  if (scrollY > 100) {
    scrollingDiv
    .stop()
    .animate({'marginTop': ((scrollY - 100)+'px')}, 'slow');
  };
});