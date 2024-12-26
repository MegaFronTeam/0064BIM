"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

function eventHandler() {
	// const $ = jQuery;
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

	// new Swiper(".breadcrumb-slider--js", {
	// 	slidesPerView: "auto",
	// 	freeMode: true,
	// 	watchOverflow: true,
	// });

	// const swiper4 = new Swiper(".sBanners__slider--js", {
	// 	// slidesPerView: 5,
	// 	...defaultSl,
	// 	slidesPerView: "auto",
	// 	freeMode: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,
	// });

	const swiper5 = new Swiper(".sLogo__slider--js", {
		slidesPerView: "auto",
		// spaceBetween: 100,
	});

	/* thumb slider */
	let prodCardThumb = new Swiper(".sProdCard-thumb-js", {
		slidesPerView: 3,
		spaceBetween: 16,
		breakpoints: {
			768: {
				spaceBetween: 26,
				direction: "vertical",
				// spaceBetween: 10,
			},
		},
	});

	let prodCardSlider = new Swiper(".sProdCard-slider-js", {
		spaceBetween: 10,
		thumbs: {
			swiper: prodCardThumb,
		},
		loop: true,
		centeredSlides: "true",
	}); //
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
