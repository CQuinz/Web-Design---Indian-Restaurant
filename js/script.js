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
    
    
})
  
  
  
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
      //$('.slider').slider.pause;
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
  };
  
  
  
  
  
});

function validation(){
	var name,email,phone, message;
	var fname,femail,fphone,fcomment;
	 name = document.getElementById("name").value;
	 email = document.getElementById("email").value;
	 phone = document.getElementById("telephone").value;
	 fname = document.getElementById("name");
	  femail = document.getElementById("email");
	   ftelephone = document.getElementById("telephone");
	   fcomment = document.getElementById("comments");
	 
	if (name == "" || email == "" || phone==""){
	
	 fname.style.backgroundColor ="#ffffcc";
	 femail.style.backgroundColor ="#ffffcc";
	ftelephone.style.backgroundColor ="#ffffcc";
	 fcomment.style.backgroundColor ="#ffffcc";
	 
	 message = "Please fill in the Blanks";
	 
	 
	 
	} else {
	fname.style.backgroundColor ="#fff";
	femail.style.backgroundColor ="#fff";
	ftelephone.style.backgroundColor ="#fff";
	fcomment.style.backgroundColor ="#fff";
	message = "";
	
	}



	document.getElementById("messageBox").innerHTML = message;
}
  

//HAMBURGER MENU BUTTON - Responsive Design
 function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}