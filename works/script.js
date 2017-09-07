console.log('reading js');
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

//javascript here...



$(document).ready(function() {
  $('body').addClass('animated fadeInLeft');
  $('#work').addClass('animated fadeInDown');
  $('#pic').addClass('animated fadeInRight');



});


// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});





});
