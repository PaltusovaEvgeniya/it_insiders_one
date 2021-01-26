var swiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 4,
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
			slidesPerGroup: 2

		},
		480: {
			slidesPerView: 3,
			spaceBetween: 20,
			slidesPerGroup: 2

		},
		640: {
			slidesPerView: 3,
			spaceBetween: 30,
			slidesPerGroup: 2

		},
		780: {
			slidesPerView: 4,
			spaceBetween: 30,
			slidesPerGroup: 2

		},
	}
});

var swiper2 = new Swiper('.swiper-container_2', {
	direction: 'horizontal',
	slidesPerView: 2,
	spaceBetween: 70,
	pagination: {
		el: '.pag__2',
		type: 'bullets',
		clickable: true,
	},
	// если разкомментировать брейкпоинты и поставить slidesPerView: 1, то почему-то пропадают отступы в 70, хотя без брейкпоинтов все работает
	// breakpoints: {

	// 	768: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 30,
	// 	}
	// 	992: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 70,
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
	// если раскомментировать брейкпоинты то пропадают и буллеты и ломаются все отступы
	// breakpoints: {

	// 	468: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 30,
	// 	}
	// 	992: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 30,
	// 	}
	// }
});

// а с эти вообще непонятки, почему-то все слайды в одну строчку встают сразу, хотя им задано что три в превью и flex-basis в 33%
var swiper4 = new Swiper('.swiper-container_4', {
	direction: 'horizontal',
	slidesPerView: 3,
	spaceBetween: 50,
	pagination: {
		el: '.pag__4',
		type: 'bullets',
		clickable: true,
	},
});