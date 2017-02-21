$(document).ready(function(){

	$(".slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: false,
		arrows: false,
		draggable: true,
		infinite: false,
		autoplay: true,
		autoplaySpeed: 20000,
		pauseOnDotsHover: true
	});


	var body_ = $('body');
	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('.main-nav');
	$('<span class="fader"/>').appendTo('.main-nav');
	$('.open-menu').click(function(){
		body_.toggleClass('menu-opened');
		return false;
	});

	$('.fader').click(function(){
		body_.removeClass('menu-opened');
	});

	function windowSize(){
		$('.slider .slide-item').each(function(index, el) {
			var widthWind = $(window).width();
			var widthImg = $(this).children('img').width();
			if (widthWind <= widthImg){
				$('.slider').addClass('hiden');
			} else {
				$('.slider').removeClass('hiden');
			}
		});
	}
	$(window).on('load resize', windowSize);

});
