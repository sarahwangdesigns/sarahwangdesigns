console.log('reading js');
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

//javascript here...


$(document).ready(function() {
  $('Body').addClass('animated fadeInUp');
  $('enter').addClass('animated fadeInDown')


});

function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}



});
