$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $('header').css('background','#1561ad');
  } else {
    $('header').css('background','transparent');
  }
});
