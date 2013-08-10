$(document).ready(function(){
	// Responsive Promo Video
	$('.video').tinaciousFluidVid();

	// CTA action
	$('.goSignUp').click(function(){
		$('.signup .email-address').focus();
	});
});