$(document).ready(function(){
	// Responsive Promo Video
	$('.video').tinaciousFluidVid();

	// CTA action
	$('.goSignUp').click(function(){
		$('.signup .email-address').focus();
	});

	// Count Animated 
	$('.number').animateNumbers(244565300, true, 900000);
});

