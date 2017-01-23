
// Navbar Effect 
/*$(window).scroll(function() { 
if ($(this).scrollTop() > 1){ 
$('header').addClass("navbar-slim"); 
} 
else{ 
$('header').removeClass("navbar-slim"); 
} 
});
*/
(function($) {

	var scroll = $(".scroll").offset();

	//console.log(scroll.top);



	$(window).scroll(function(){
		if($(this).scrollTop()>scroll.top){
			$('.header').addClass('fixed');
			$('.fixed').slideDown(100);
			                //$('.fixed').show(100);
			            }
			            else if ($(this).scrollTop()<scroll.top){
			            	$('.fixed').slideUp(100);
			            	$('.header').removeClass('fixed');
			                //$('.header').removeClass('fixed');
			            }
			        });



})(jQuery);

$(document).ready(function() {

	$('#menu_trigger').click(function() {
		$('nav ul').slideToggle(500);
	});	
	 $(window).resize(function() {		
		if (  $(window).width() > 768 ) {			
			$('nav ul').removeAttr('style');
			console.log('true')
		 }
	});//end resize
});