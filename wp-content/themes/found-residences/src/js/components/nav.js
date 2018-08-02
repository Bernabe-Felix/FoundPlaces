import ATTCK from 'attck';

function Nav($el) {
	function navToggle() {
		// Open nav on hamburger click
		$('.main-header').toggleClass('open');
	}

	// function scrolledNav($el) {
	// 	// Bind to scroll
	// 	$(document.body).bind('ATTCK.scroll', function (e, data) {
	// 		// Show/hide nav bar background color
	// 			var scroll = data.currentScrollTop;
    //
	// 			// Hide nav entirely once scrolled past a certain distance
	// 			if (scroll >= 450) {
	// 				if (!$('body').hasClass('hideNav')) {
	// 					$('body').addClass('hideNav');
    //
	// 					// Also close previously opened nav
	// 					if ($('body').hasClass('navOpen')) {
	// 						$('.hamburger').trigger('click');
	// 					}
	// 				}
	// 			}
    //
	// 			// Show again as soon as they start scrolling back up
	// 			if (data.scrollDirection === 'up') {
	// 				$('body').removeClass('hideNav');
	// 			}
	// 	});
	// }

	// function resizeFrame(e) {
	// 	const $el = $('.page-footer');
	// 	const scrollTop = $(window).scrollTop();
	// 	const scrollBot = scrollTop + $(window).height();
	// 	const elTop = $el.offset().top;
	// 	const elBottom = elTop + $el.outerHeight();
	// 	const elVisibleTop = elTop < scrollTop ? scrollTop : elTop;
	// 	const elVisibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
	// 	let elVisibleHeight = elVisibleBottom - elVisibleTop;
	// 	elVisibleHeight = elVisibleHeight >= 0 ? elVisibleHeight : 0;
    //
	// 	const windowHeight = $(window).innerHeight();
	// 	const siteFrameHeight = windowHeight - elVisibleHeight;
	// 	if (siteFrameHeight < windowHeight) {
	// 		$('.site-frame').css('height', siteFrameHeight);
	// 	} else {
	// 		$('.site-frame').css('height', '');
	// 	}
	// }

	this.init = function ($el) {
		$el = $el;
		$el.find('.hamburger-container').on('click', navToggle);
		$el.find('.close-container').on('click', navToggle);

		// scrolledNav();
		// resizeFrame();

		// If we're clicking outside the nav, close the nav.
		// $(document).on('mouseover',function (e) {
		// 	let $target = $(e.target);
		// });

		// Hide the mobile nav and search when resizing the window.
		// $(window).on('resize', function () {
		// 	$('body').removeClass('navOpen');
		// 	resizeFrame();
		// });

		// $(window).on('scroll', function() {
		// 	resizeFrame();
		// });

		return this;
	}

	return this.init($el);
}

export default Nav;
