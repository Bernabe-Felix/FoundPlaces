/**
 * Qualls Benson — Twenty Broad, Footer Component
 * Fades in/out to black between page navigation
 */
function QBOBSFooter($el) {
	function bindEvents() {
		// Fade upon footer link click
		$('.menu-item a', $el).on('click', fadePageTransition); 

		// Also fade on header logo link click
		$('.site-title a').on('click', fadePageTransition);

		// Move equal housing logo into the footer list
		$('.menu', $el).append($('.white_equal_housing_logo'));
		$('.white_equal_housing_logo').wrap('<li class="menu-item equal-housing"></li>');

		// Instantly fade in all things on Team and Legal pages
		$('.page-legal .fade-me-in, .page-team .fade-me-in').addClass('faded-in');

		// Handle successful CF7 mail submissions and show thank you message
		// TODO: (DP) Possibly move this to form-events.js
		// https://stackoverflow.com/questions/27798264/contact-form-7-ajax-callback
		$('body').on('wpcf7mailsent', function () {
			// Fade out and kill the popup
			$('.component-contact-modal').fadeOut(function () {
				$(this).remove();
			});

			// Fade the modal away
			$('body').removeClass('showContactModal');
			$('.component-contact-modal-overlay').removeClass('visible');

			// Fade out the logo, title, and description
			// $('.component-hero-animation>div').fadeOut(function () {
				// ...then remove it
			// 	$(this).remove();
			// });

			// Remove the contact button
			$('.component-contact-modal-cta').remove();

			// Replace with new text
			$('.component-hero-animation').append('<div class="component sub-header thank-you"><h1 class="page-title sans-serif19 fade-me-in faded-in">Thank you!</h1><p class="thank-you-message fade-me-in faded-in">Thank you for your submission. A member of the 20 Broad team will get back to you shortly.</p></div>');

			// Fade in new text
			$('.component-hero-animation .sub-header').fadeIn();

			// Insert header
			// $('<header class="main-header component"><div class="header-inner"><div class="site-title fade-me-in faded-in"><a href="http://oneblueslip.wpengine.com" style="z-index:3;position:relative;">Twenty Broad</a></div></div></header>').insertAfter('.svg-sprite');
		});
	}

	function fadePageTransition(e) {
		e.preventDefault();

		var $link = $(this);

		// Change blackout modal display state
		$(document.body).addClass('show-blackout-modal');

		// Trigger blackout modal fade in
		setTimeout(function () {
			$('.modal-blackout').addClass('visible');
		}, 10); // <-- Needs to happen just slightly after 
		// display state is changed to block

		// Go to the next page after two seconds
		setTimeout(function () {
			window.location = $link.attr('href');
		}, 500);

		return false;
	}

	this.init = function($el) {
		bindEvents();

		return this;
	}

	return this.init($el);
}

export default QBOBSFooter;
