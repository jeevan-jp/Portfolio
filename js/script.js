 var h = $(window).height()-20;
    $('#iframe1').css('height',h);

 $(document).ready(function() {
 	$('#portfolio').on('click',function (e) {
 		e.preventDefault();

 		var target = '#space2';
 		var $target = $(target);

 			$('html, body').animate({
 			     'scrollTop': $target.offset().top
 		      }, 1200, 'swing');
 	});

 	$('#contact, #contact_para').on('click',function (e) {
 		e.preventDefault();

 		var target = '#space3';
 		var $target = $(target);

 			$('html, body').animate({
 			     'scrollTop': $target.offset().top
 		      }, 2000, 'swing');
 	});
 });