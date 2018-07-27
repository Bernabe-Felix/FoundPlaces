/**
 * Fade In Elements component
 * Fades in hidden elements when user scrolls them far enough into view
 */
import ATTCK from 'attck';
import $$ from './cached-dom-elements';

function FadeInElements($el) {
	var _fadedElementsOffsetIndex = [];
	var _scrollstopTimer = 0;
	var _currentScrollTop = $(window).scrollTop();
	var _viewportHeight = $(window).outerHeight();

	function bindEvents() {
		$(document.body).on('ATTCK.scroll', function (e, data) {
			// Reset timer to trigger fadeInElements
			_scrollstopTimer = 0;

			_currentScrollTop = data.currentScrollTop;

			// Check the current scroll offset against the DOM element offset array
			fadeInElements();
		});

		// Include check for page resize as well since that
		// can potentially cause the page to scroll
		$(document.body).on('ATTCK.resize', function () {
			// Reset timer to trigger fadeInElements
			_scrollstopTimer = 0;

			_viewportHeight = $(window).outerHeight();

			indexAllFadedElements();
		});
	}

	function checkTimer() {
		// Check if user stopped scrolling for more than two seconds and show anything that
		// would be visible but hasn't hit the vertical scroll threshold yet
		if (_scrollstopTimer > 1000 && _scrollstopTimer !== 1) {
			fadeInElements(_viewportHeight);

			// Stop the timer once it runs once, until the next time the user scrolls
			// which will trigger this again
			_scrollstopTimer = 1;
		} else if (_scrollstopTimer !== 1) {
			// Increment timer
			_scrollstopTimer = _scrollstopTimer + 100;
		}
	}

	function fadeInElements(scrollThreshold) {
		// Set Default scroll threshold
		if (typeof scrollThreshold === 'undefined') {
			scrollThreshold = _viewportHeight*.8;
		}
		_currentScrollTop = $(window).scrollTop();

		$.each($$('.fade-me-in'), function (index, value) {
			var verticalScrollThreshold = (_currentScrollTop + scrollThreshold);
			var thisElementOffset = $(this).offset().top;

			// Fade in elements once they are halfway up the screen
			if (thisElementOffset < verticalScrollThreshold) {
				$(this).addClass('faded-in');
			}
		});
	}

	function hideAllElements() {
		// First, hide all elements
		// $('body').find('h1, h2, h3, h4, h5, p, span').addClass('fade-me-in');

		$('body').find('h1, h2, h3, h4, h5, p, span, a').each(function (index, value) {
			if (!$(this).hasClass('dont-fade-me-in')) {
				$(this).addClass('fade-me-in');
			}
		});

		// Show protected areas
		$('.main-header').find('h1, h2, h3, h4, h5, p, span, a').css('opacity', 1);
		$('.page-footer').find('h1, h2, h3, h4, h5, p, span, a').css('opacity', 1);

		indexAllFadedElements();
	}

	function indexAllFadedElements() {
		$('.fade-me-in').each(function () {
			// Convert offset values to strings since they're floats and not a valid array ID
			_fadedElementsOffsetIndex.push({
				'offset': $(this).offset().top,
				'element': $(this)
			});
		});
	}

	this.init = function($el) {
		bindEvents();
		hideAllElements();

		// Start scroll timer
		setInterval(function () {
			checkTimer();
		}, 100);

		return this;
	}

	return this.init($el);
}

export default FadeInElements;
