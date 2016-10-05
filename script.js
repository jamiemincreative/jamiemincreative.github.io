$(document).ready(function() {
	
	
	//Animation
	
	
	
	
	//Add smooth scrolling to all links
	$('a').on('click', function(event) {
		
		//Make sure this.hash has a value before overriding default behaviour
		if(this.hash !== "") {
			//Prevent default anchor click behaviour
			event.preventDefault();
			
			//Store hash
			var hash = this.hash;
			
			//Using jQuery's animate() method to add smooth page scroll
			//The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				
				//Add hash(#) to URL when done scrolling (default click behaviour)
				window.location.hash = hash;
			});
		} //end if
	});
	
	
	
	
});