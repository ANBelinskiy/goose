$(document).ready(function(){
	var swiper = new Swiper('.container', {
		navigation: {
			nextEl: '.pag-btn-next',
			prevEl: '.pag-btn-prev',
		},
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
	});
});