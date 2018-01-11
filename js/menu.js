if ($(window).width() > 1024) {
	$(document).ready(function(){
	    $(window).scroll(function(){
	        if ($(window).scrollTop() > 50){
	            $('.top-bar').addClass('compact');
	            $('.top-bar').removeClass('extended');
	        }
	        else if ($(window).scrollTop() < 50){
	            $('.top-bar').addClass('extended');
	            $('.top-bar').removeClass('compact');
	        }
	    });
	});
}
else {
	$(document).ready(function(){
	    $(window).scroll(function(){
	        if ($(window).scrollTop() > 50){
	            $('.top-bar').addClass('compact-single-scroll');
	            $('.top-bar').removeClass('compact-single-top');
	        }
	        else if ($(window).scrollTop() < 50){
	            $('.top-bar').addClass('compact-single-top');
	            $('.top-bar').removeClass('compact-single-scroll');
	        }
	    });
	});
}