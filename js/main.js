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

		// Add an Assignment
		$('.addAssignment').click(function(){
			var assignmentTable = $(this).siblings('table');
			assignmentTable.find('tbody').append('<tr><td><input type="text"></td><td><input type="number"></td><td><input type="number"></td><td><input type="text" class="datepicker"></td></tr>');
			assignmentTable.find('tr:last input:first').focus();
			$('.datepicker').datepicker();
			return false;
		});

		// Due date
		$('.datepicker').datepicker();

	// Scholarship Add to Favourites
	$('.addFavourite').click(function(){
		$(this).attr('src','img/star-active.png');
		return false;
	});

});

