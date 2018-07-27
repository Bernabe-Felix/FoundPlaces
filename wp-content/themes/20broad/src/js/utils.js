import ATTCK from 'attck';
import Config from 'config';

// Import all JS components explicitly.
import $$ from './components/cached-dom-elements';
import Analytics from './components/analytics';
import FadeInElements from './components/fade-in-elements';
import FormEvents from './components/form-events';
import Map from './components/Map';
import Nav from './components/nav';
import Parallax from './components/parallax';
import QBTwentyBroadCarousel from './components/QB-twenty-broad-carousel';
import QBTwentyBroadNeighborhoodCarousel from './components/QB-twenty-broad-neighborhood-carousel';

// Add your components here so they get loaded.
// Make sure to import them above first.
ATTCK.Components = {
	// 'Analytics': Analytics,
	// 'FadeInElements': FadeInElements,
	// 'Map': Map,
	// 'Nav': Nav,
	// 'Parallax': Parallax,
	// 'QBTwentyBroadCarousel': QBTwentyBroadCarousel,
	// 'QBTwentyBroadNeighborhoodCarousel': QBTwentyBroadNeighborhoodCarousel,
};

ATTCK.Utils = {};

ATTCK.Utils.loadComponents = function () {
	ATTCK.Utils.loadedComponents = [];

	var self = this;

	$('.component').each(function () {
		// Gracefully fail if no component name has been defined
		if (!$(this).attr('data-component-name')) {
			return;
		}

		var $this = $(this);
		var componentNames = $this.attr('data-component-name').split(',');

		// A stack of JS components associated with this DOM element.
		let instances = $this.data('component-instances');

		if (!instances) {
			instances = [];
		}

		$.each(componentNames, function (i, el) {
			let componentName = el;
			let params = $this.data('component-options') || {};
			let instance = new ATTCK.Components[componentName]($this, params);

			// Save component instance references in a global manifest.
			if (typeof ATTCK.Components[componentName] !== 'undefined') {
				self.loadedComponents.push({
					'instance': instance
				});

				instances.push(instance);
			}
		});

		// Save component instances to the DOM element.
		$this.data('component-instances', instances);
	});
};

ATTCK.Utils.initGlobalEvents = function () {
	var G = ATTCK.Globals;
	var $window = $(window);
	var self = this;

	G.currentScrollTop = $window.scrollTop();
	G.lastScrollTop	= $window.scrollTop();
	G.viewportHeight   = $window.outerHeight();
	G.viewportWidth	= $window.outerWidth();
	G.scrollInProgress = false;

	// Trigger a custom event when scrolling.
	$window.on('scroll', function (e) {
		G.currentScrollTop = $window.scrollTop();

		// Limit how often this fires, so we don't have the JS double-firing.
		if (Math.abs(G.currentScrollTop - G.lastScrollTop) < 10) {
			return;
		}

		$(document.body).trigger('ATTCK.scroll', {
			'e': e,
			'currentScrollTop': G.currentScrollTop,
			'viewportHeight':   G.viewportHeight,
			'scrollDirection':  (G.currentScrollTop > G.lastScrollTop ? 'down' : 'up')
		});

		G.lastScrollTop = G.currentScrollTop;
	});

	// Detect screen orientation
	function detectOrientation() {

		// Default is portrait
		var orientation = 'orientation-portrait';
		var videoOrientation = 'video-portrait';

		// Landscape
		if (G.viewportWidth > G.viewportHeight) {
			orientation = 'orientation-landscape';
		}

		// Adding QB-OBS specific BG video aspect ratio detection
		if ((G.viewportWidth / G.viewportHeight) > 1.77) {
			videoOrientation = 'video-landscape';
		}

		// Remove previous detections
		$(document.body).removeClass('orientation-portrait orientation-landscape video-portrait video-landscape');

		// Set new detection values
		$(document.body).addClass(orientation + ' ' + videoOrientation);
	}

	// ...on load
	detectOrientation();

	// ...and screen resize
	$(document.body).on('ATTCK.resize', detectOrientation);

	// Detect whether body content is taller than viewport
	function detectContentVsViewportHeightRatio() {
		// Tab body if content height is taller than viewport
		// TODO: (DP) Change this to be agnostic to QB_OBS
		var totalComponentHeight = 0;

		$('.component').each(function (index, value) {
			// Exclude the hidden modal which doesn't take up any height
			if (!$(this).hasClass('component-contact-modal')) {
				totalComponentHeight += $(this).outerHeight(true);
			}
		});

		if (totalComponentHeight > G.viewportHeight) {
			// Set new detection
			$(document.body).addClass('body-content-height-is-taller-than-viewport');
		} else {
			// Remove previous detection
			$(document.body).removeClass('body-content-height-is-taller-than-viewport');
		}
	}

	// ...on load
	detectContentVsViewportHeightRatio();

	// ...and screen resize
	$(document.body).on('ATTCK.resize', detectContentVsViewportHeightRatio);

	// Tag body once page has loaded for one-time page load functions
	$(window).on('load', function () {
		$(document.body).addClass('window-loaded');

		// Adding for QB-OBS blackout modal fade out on load animation (2sec)
		setTimeout(function () {
			$(document.body).addClass('window-has-been-loaded-for-two-seconds');
		}, 2000);

		// Adding for QB-OBS hero page load animation (5sec)
		setTimeout(function () {
			$(document.body).addClass('window-has-been-loaded-for-five-seconds');
		}, 5000);
	});

		// Tag body once page has loaded for one-time page load functions
	$(function () {
		$(document.body).addClass('dom-loaded');

		// Adding for QB-OBS blackout modal fade out on load animation (2sec)
		setTimeout(function () {
			$(document.body).addClass('dom-has-been-loaded-for-two-seconds');
		}, 2000);

		// Adding for QB-OBS hero page load animation (5sec)
		setTimeout(function () {
			$(document.body).addClass('dom-has-been-loaded-for-five-seconds');
		}, 5000);
	});

	// Save the viewport height only as neccessary when it changes.
	$window.resize(function(e) {
		G.viewportHeight = $window.outerHeight();
		G.viewportWidth  = $window.outerWidth();

		$(document.body).trigger('ATTCK.resize', {
			'e': e,
			'viewportHeight': G.viewportHeight,
			'viewportWidth': G.viewportWidth
		});
	});

	// Listen to WPCF7 Events.
	// TODO: (DP) Probably move this to its own component file
	FormEvents();

	// Init Analytics
	// TODO: (DP) User event tracking goes here
	var instance = new ATTCK.Components['Analytics']($('body'), {});
};

// Declares ATTCK.Utils.xsOnly(), smOnly(), etc for running
// breakpoint-specific functionality.
$.each(Config.breakpoints, function (i, val) {
	ATTCK.Utils[val + 'Only'] = function (f) {
		if (!$$('.breakpoint.' + val).is(':visible')) {
			return;
		}

		f();
	}
});

// Add debug utilities to the page when Config.debug is true.
if (Config.debug === true) {
	$(document.body)
		.addClass("debug")
		.on("ATTCK.resize", function () {
			ATTCK.Utils.xsOnly(function () {
				$(".breakpoint-current").show().text("Breakpoint is XS");
			});

			ATTCK.Utils.smOnly(function () {
				$(".breakpoint-current").show().text("Breakpoint is SM");
			});

			ATTCK.Utils.mdOnly(function () {
				$(".breakpoint-current").show().text("Breakpoint is MD");
			});

			ATTCK.Utils.lgOnly(function () {
				$(".breakpoint-current").show().text("Breakpoint is LG");
			});

			ATTCK.Utils.xlOnly(function () {
				$(".breakpoint-current").show().text("Breakpoint is XL");
			});
		});
}

// Trigger scroll event in case anything is in a partial-state waiting
// for scroll (e.g., initial nav opacity)
$(window).trigger('resize');

export default ATTCK.Utils;
