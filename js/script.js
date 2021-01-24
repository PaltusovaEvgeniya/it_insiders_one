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
	slidesPerView: 2,
	spaceBetween: 10,
	pagination: {
		el: '.pag__2',
		type: 'bullets',
		clickable: true,
	},
	// breakpoints: {

	// 	320: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 10,
	// 	},
	// 	480: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 30,
	// 	},
	// 	650: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 30,
	// 	}
	// 	768: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 30,
	// 	}
	// 	992: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 60,
	// 	}
	// }
});

var swiper3 = new Swiper('.swiper-container_3', {
	direction: 'horizontal',
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
	slidesPerView: 2,
	spaceBetween: 50,
	pagination: {
		el: '.pag__4',
		type: 'bullets',
		clickable: true,
	},
});