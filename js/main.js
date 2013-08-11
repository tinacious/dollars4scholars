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
	$('.addCourse').fancybox({
		maxWidth: 960
	});

	// Add an Assignment
	$('.addAssignment').click(function(){
		var assignmentTable = $(this).siblings('table');
		assignmentTable.find('tbody').append('<tr><td><input type="text"></td><td><input type="number"></td><td><input type="number"></td><td><input type="text" class="datepicker" id="updateMarks"></td></tr>');
		assignmentTable.find('tr:last input:first').focus();

		// Dashboard Assignment Adding
		$('#updateMarks').datepicker({
			onClose: function(dateText, inst){
				// Hide not eligible
				$('.notEligible').fadeOut(100).html('You are now eligible for the following scholarships!').fadeIn(1000);
				
				// Update Marks
				$('.cgpa').hide().fadeIn(2000).html('80%');
				$('.tgpa').hide().fadeIn(2000).html('82%');

				// Show scholarships
				$('.dashboard-section .scholarships').delay(1300).slideDown(900);
			}
		});
		return false;
	});

	// Due date
	$('.datepicker').datepicker();

	// Scholarship Add to Favourites
	$('.addFavourite').click(function(){
		$(this).attr('src','img/star-active.png');
		return false;
	});

	// Dashboard Mobile Navigation Menu
	$('.mobile-link').click(function(){
		$('.banner ul').slideToggle();
	});

	// Favourites -- Scholarship Ineligibility
	$('.warning-icon').fancybox({
		maxWidth: 960
	});
	$('#modalWarning .help').fancybox({
		maxWidth: 960
	});
	$('.button-list .remove').click(function(){
		$('#invalidSch').hide();
		parent.$.fancybox.close();
	});

});