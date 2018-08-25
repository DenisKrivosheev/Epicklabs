    $('.sl').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  appendArrow:'.arrow',  
    autoplay: true,
  autoplaySpeed: 1200, 
});
$('.count').each(function() {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	},{
		duration:2000,
		easing:'swing',
		step:function(now){
			$(this).text(Math.ceil(now));
		}
	});
});
﻿