console.log('reading js');
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

//javascript here...


$(document).ready(function() {
  $('Body').addClass('animated fadeInUp');
  $("header").append("<div class='glitch-window'></div>");
//fill div with clone of real header
$( "h1.glitched" ).clone().appendTo( ".glitch-window" );
});





});
