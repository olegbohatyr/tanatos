$(function(){
	$(".comments--carusel").owlCarousel({
		items:1,
	    margin:30,
	    stagePadding:30,
	    nav:true,
	    dots:false,
	});
	$(".team--carusel").owlCarousel({
    	margin:60,
    	dots:true,
    	responsive : {
    		1200:{
    			items:4,
    		},
    		768:{
    			items:2,
    		},
    		560:{
    			items:1,
    		},
    		0:{
    			items:1,
    		}
    	}
	});

	$('.menu__button').on('click', function(){
		$(this).toggleClass('open');
		$('.menu__hidden').fadeToggle(300);
	});
	
	
})