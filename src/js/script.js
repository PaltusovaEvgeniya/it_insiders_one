// import Swiper from 'swiper';

// import '../../node_modules/swiper/swiper-bundle.css';
// import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// SwiperCore.use([Navigation, Pagination]);


// import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper-container.swiper-container__featured', {
	direction: 'horizontal',
	slidesPerView: "2",
	spaceBetween: 15,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: 'true',
	},
	breakpoints: {
		360: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		}
	},
});


const swiper1 = new Swiper('.swiper-container.swiper-container__event', {
	direction: 'horizontal',
	slidesPerView: "1",
	spaceBetween: 50,
	pagination: {
		el: '.swiper-pagination__event',
		type: 'bullets',
		clickable: 'true',
	},
	breakpoints: {
		500: {
			slidesPerView: 2,
		}
	}
});

const swiper2 = new Swiper('.swiper-container.swiper-container__countries', {
	direction: 'horizontal',
	slidesPerView: "1",
	spaceBetween: 50,
	pagination: {
		el: '.swiper-pagination__countries',
		type: 'bullets',
		clickable: 'true',
	},
	breakpoints: {
		500: {
			slidesPerView: 2,
		},
		900: {
			spaceBetween: 30,
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 3,
		}
	},
});


const swiper3 = new Swiper('.swiper-container.swiper-container__testimonial', {
	direction: 'horizontal',
	slidesPerView: "1",
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination__testimonial',
		type: 'bullets',
		clickable: 'true',
	},
	breakpoints: {
		768: {
			slidesPerView: 1.5,
		},
		1024: {
			slidesPerView: 2.5,
		}
	},
});