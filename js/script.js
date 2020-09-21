function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

if($('.slider__body').length>0){
	$('.slider__body').slick ({
		//autoplay:true,
		//infinite:false,
		dots:true,
		arrows:false,
		accessibility:false,
		slidesToShow: 1,
		adaptiveHeight:true,
		autoplaySpeed:3000,
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}
