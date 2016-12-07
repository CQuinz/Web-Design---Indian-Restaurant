$( document ).ready(function() {
  // Handler for .ready() called.
  
  //http://paulmason.name/item/simple-jquery-carousel-slider-tutorial
  jQuery(function($) { 
  
    // settings
    var $slider = $('.slider'); // class or id of carousel slider
    var $slide = 'li'; // could also use 'img' if you're not using a ul
    var $transition_time = 1000; // 1 second
    var $time_between_slides = 4000; // 4 seconds
  
    function slides(){
      return $slider.find($slide);
    }
  
    slides().fadeOut();
  
    // set active classes
    slides().first().addClass('active');
    slides().first().fadeIn($transition_time);
  
    // auto scroll 
    $interval = setInterval(
      function(){
        var $i = $slider.find($slide + '.active').index();
  
        slides().eq($i).removeClass('active');
        slides().eq($i).fadeOut($transition_time);
  
        if (slides().length == $i + 1) $i = -1; // loop to start
  
        slides().eq($i + 1).fadeIn($transition_time);
        slides().eq($i + 1).addClass('active');
      }
      , $transition_time +  $time_between_slides 
    );
  
  });
  
  // JQUERY SCRIPT FOR RESERVATION FORM
  //source:(http://www.w3schools.com/howto/howto_css_modals.asp)
  
  
  // Get the modal
  var modal = document.getElementById('myModal');
  
  // Get the button that opens the modal
  var btn = document.getElementById("reservationBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal 
  btn.onclick = function() {
      modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
});