var swiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 2,
	spaceBetween: 10,
	slidesPerGroup: 2,
	pagination: {
		el: '.pag__1',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {

		320: {
			slidesPerView: 2,
			spaceBetween: 15,
			slidesPerGroup: 2,

		},
		480: {
			slidesPerView: 3,
			spaceBetween: 20,
			slidesPerGroup: 2,

		},
		640: {
			slidesPerView: 4,
			spaceBetween: 30,
			slidesPerGroup: 2,

		}
	}
});

var swiper2 = new Swiper('.swiper-container_2', {
	direction: 'horizontal',
	// loop: true,
	slidesPerView: 2,
	spaceBetween: 10,
	pagination: {
		el: '.pag__2',
		type: 'bullets',
		clickable: true,
	},
});

var swiper3 = new Swiper('.swiper-container_3', {
	direction: 'horizontal',
	// loop: true,
	slidesPerView: 3,
	spaceBetween: 55,
	pagination: {
		el: '.pag__3',
		type: 'bullets',
		clickable: true,
	},
});


var swiper4 = new Swiper('.swiper-container_4', {
	direction: 'horizontal',
	// loop: true,
	slidesPerView: 2,
	spaceBetween: 50,
	// grabCursor: true;
	pagination: {
		el: '.pag__4',
		type: 'bullets',
		clickable: true,
	},
});