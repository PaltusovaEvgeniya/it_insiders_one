var swiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	// loop: true,
	slidesPerView: 2,
	spaceBetween: 10,
	// slidesPerGroup: 2,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {

		320: {
			slidesPerView: 2,
			spaceBetween: 10,
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
	spaceBetween: 50,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});