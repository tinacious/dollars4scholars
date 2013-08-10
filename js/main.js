$(document).ready(function(){
	// Responsive Promo Video
	$('.video').tinaciousFluidVid();

	// CTA action
	$('.goSignUp').click(function(){
		$('.signup .email-address').focus();
	});

	// Count Animated 
	$('.number').animateNumbers(244565300, true, 900000);

	// Tabs
	$('.tab-content').hide();
	$('.tab-content').first().show();
	$('.tabs-nav li a').first().addClass('active-tab')
	$('.tabs-nav li a').click(function(e){
	  $('.tab-content').hide();
	  $('.tabs-nav a').removeClass('active-tab');
	  $(this).addClass('active-tab');
	  var activeTab = $(this).attr('href');
	  $(activeTab).show();
	  e.preventDefault();
	});

		// Add course tab
		$('#modalAddCourse').hide();
		$('.addCourse').fancybox({
			maxWidth: 960
		});

});

