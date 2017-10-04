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
    if ($(window).scrollTop() > amountScrolled) {
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


  //fade in pictures as I scroll up and down
  $(window).on("load", function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(300, 1);
          }
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(300, 0);
          }
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });


  function preloadImage(url)
  {
      var img=new Image();
      img.src=url;
  }

});
