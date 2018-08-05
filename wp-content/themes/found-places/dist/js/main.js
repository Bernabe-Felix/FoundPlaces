/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * Declares the global namespace, and the ns() utility for declaring
 * sub-namespaces.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var clientNamespace = {};
var ATTCK = clientNamespace;

/**
 * DEPRECATED. Use import / export instead. 
 *
 * Namespace function. Creates the namespace passed to it, if it doesn't exist.
 */
ATTCK.namespace = function () {
	var ln = arguments.length,
	    i,
	    value,
	    x,
	    xln,
	    parts,
	    object;

	for (i = 0; i < ln; i++) {
		value = arguments[i];
		parts = value.split(".");
		object = window[parts[0]] = Object(window[parts[0]]);

		for (x = 1, xln = parts.length; x < xln; x++) {
			object = object[parts[x]] = Object(object[parts[x]]);
		}
	}
	return object;
};

ATTCK.ns = ATTCK.namespace;

ATTCK.Globals = {};

exports.default = ATTCK;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Caching function
 * Usage: $$({selector}) returned cached element if previously used
 * or caches upon first use.
 */
window.cachedDomElements = function () {
	var cachedElements = {};

	// Using the HTML element for data storage
	var $EL = $('html');

	function get(name) {
		// Return everything if param is empty
		if (typeof name === 'undefined') {
			return cachedElements;
		}

		// If the element hasn't been cached yet, cache it
		// If it's not a jQuery object, assume it should be cached within
		// the current component context ($EL)
		if (typeof cachedElements[name] === 'undefined') {
			if (name instanceof jQuery) {
				return set(name, name);
			} else {
				return set(name, $EL.find(name));
			}
		}

		// Otherwise just give them what they asked for
		return cachedElements[name];
	}

	function reset(name) {
		if (!name) {
			cachedElements = {};
		}

		delete cachedElements[name];
	}

	function set(name, value) {
		cachedElements[name] = value;
		return cachedElements[name];
	}

	return {
		'get': get,
		'reset': reset,
		'set': set
	};
}();

var $$ = function $$(el) {
	return window.cachedDomElements.get(el);
};

exports.default = $$;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _attck = __webpack_require__(1);

var _attck2 = _interopRequireDefault(_attck);

var _config = __webpack_require__(15);

var _config2 = _interopRequireDefault(_config);

var _cachedDomElements = __webpack_require__(2);

var _cachedDomElements2 = _interopRequireDefault(_cachedDomElements);

var _analytics = __webpack_require__(8);

var _analytics2 = _interopRequireDefault(_analytics);

var _fadeInElements = __webpack_require__(10);

var _fadeInElements2 = _interopRequireDefault(_fadeInElements);

var _formEvents = __webpack_require__(11);

var _formEvents2 = _interopRequireDefault(_formEvents);

var _Map = __webpack_require__(5);

var _Map2 = _interopRequireDefault(_Map);

var _nav = __webpack_require__(12);

var _nav2 = _interopRequireDefault(_nav);

var _parallax = __webpack_require__(13);

var _parallax2 = _interopRequireDefault(_parallax);

var _QBTwentyBroadCarousel = __webpack_require__(6);

var _QBTwentyBroadCarousel2 = _interopRequireDefault(_QBTwentyBroadCarousel);

var _QBTwentyBroadNeighborhoodCarousel = __webpack_require__(7);

var _QBTwentyBroadNeighborhoodCarousel2 = _interopRequireDefault(_QBTwentyBroadNeighborhoodCarousel);

var _customMap = __webpack_require__(9);

var _customMap2 = _interopRequireDefault(_customMap);

var _scrollIndicator = __webpack_require__(14);

var _scrollIndicator2 = _interopRequireDefault(_scrollIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add your components here so they get loaded.
// Make sure to import them above first.
_attck2.default.Components = {
	// 'Analytics': Analytics,
	'FadeInElements': _fadeInElements2.default,
	// 'Map': Map,
	'Nav': _nav2.default,
	'CustomMap': _customMap2.default,
	'ScrollIndicator': _scrollIndicator2.default
	// 'Parallax': Parallax,
	// 'QBTwentyBroadCarousel': QBTwentyBroadCarousel,
	// 'QBTwentyBroadNeighborhoodCarousel': QBTwentyBroadNeighborhoodCarousel,
};

// Import all JS components explicitly.


_attck2.default.Utils = {};

_attck2.default.Utils.loadComponents = function () {
	_attck2.default.Utils.loadedComponents = [];

	var self = this;

	$('.component').each(function () {
		// Gracefully fail if no component name has been defined
		if (!$(this).attr('data-component-name')) {
			return;
		}

		var $this = $(this);
		var componentNames = $this.attr('data-component-name').split(',');

		// A stack of JS components associated with this DOM element.
		var instances = $this.data('component-instances');

		if (!instances) {
			instances = [];
		}

		$.each(componentNames, function (i, el) {
			var componentName = el;

			if (!_attck2.default.Components[componentName]) return;

			var params = $this.data('component-options') || {};
			var instance = new _attck2.default.Components[componentName]($this, params);

			// Save component instance references in a global manifest.
			if (typeof _attck2.default.Components[componentName] !== 'undefined') {
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

_attck2.default.Utils.initGlobalEvents = function () {
	var G = _attck2.default.Globals;
	var $window = $(window);
	var self = this;

	G.currentScrollTop = $window.scrollTop();
	G.lastScrollTop = $window.scrollTop();
	G.viewportHeight = $window.outerHeight();
	G.viewportWidth = $window.outerWidth();
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
			'viewportHeight': G.viewportHeight,
			'scrollDirection': G.currentScrollTop > G.lastScrollTop ? 'down' : 'up'
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
		if (G.viewportWidth / G.viewportHeight > 1.77) {
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
	$window.resize(function (e) {
		G.viewportHeight = $window.outerHeight();
		G.viewportWidth = $window.outerWidth();

		$(document.body).trigger('ATTCK.resize', {
			'e': e,
			'viewportHeight': G.viewportHeight,
			'viewportWidth': G.viewportWidth
		});
	});

	// Listen to WPCF7 Events.
	// TODO: (DP) Probably move this to its own component file
	(0, _formEvents2.default)();

	// Init Analytics
	// TODO: (DP) User event tracking goes here
	// var instance = new ATTCK.Components['Analytics']($('body'), {});
};

// Declares ATTCK.Utils.xsOnly(), smOnly(), etc for running
// breakpoint-specific functionality.
$.each(_config2.default.breakpoints, function (i, val) {
	_attck2.default.Utils[val + 'Only'] = function (f) {
		if (!(0, _cachedDomElements2.default)('.breakpoint.' + val).is(':visible')) {
			return;
		}

		f();
	};
});

// Add debug utilities to the page when Config.debug is true.
if (_config2.default.debug === true) {
	$(document.body).addClass("debug").on("ATTCK.resize", function () {
		_attck2.default.Utils.xsOnly(function () {
			$(".breakpoint-current").show().text("Breakpoint is XS");
		});

		_attck2.default.Utils.smOnly(function () {
			$(".breakpoint-current").show().text("Breakpoint is SM");
		});

		_attck2.default.Utils.mdOnly(function () {
			$(".breakpoint-current").show().text("Breakpoint is MD");
		});

		_attck2.default.Utils.lgOnly(function () {
			$(".breakpoint-current").show().text("Breakpoint is LG");
		});

		_attck2.default.Utils.xlOnly(function () {
			$(".breakpoint-current").show().text("Breakpoint is XL");
		});
	});
}

// Trigger scroll event in case anything is in a partial-state waiting
// for scroll (e.g., initial nav opacity)
$(window).trigger('resize');

exports.default = _attck2.default.Utils;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_provided_window_dot_jQuery = _jquery2.default;

// Import jQuery and make it a global object

window.$ = _jquery2.default;

// Global component loader.
(0, _jquery2.default)(function () {
	_utils2.default.loadComponents();
	_utils2.default.initGlobalEvents();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Map component
 */
function Map() {
	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 14,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.706942, -74.011392), // New York

			mapTypeControlOptions: { mapTypeIds: [] },

			// How you would like to style the map.
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "administrative.province", "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "color": "#fbf9f9" }] }, { "featureType": "administrative.province", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#0b0909" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "invert_lightness": true }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "color": "#fefefe" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#060404" }, { "weight": "2" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#464a56" }] }, { "featureType": "landscape", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#d9d9d8" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#002136" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#f9f0f0" }, { "visibility": "off" }] }]
		};

		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		if (mapElement) {
			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);

			// Let's also add a marker while we're at it
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.706942, -74.011392),
				map: map,
				title: '20 Broad St.'
			});

			google.maps.event.addListener(map, 'zoom_changed', function () {
				console.log(map.getZoom());
				if (map.getZoom() < 7) map.setZoom(7);
			});
		}
	}
}

exports.default = Map();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * QB Twenty Broad Neighborhood Carousel component
 */
function TwentyBroadCarousel($el) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var defaults = {
		'accessibility': true,
		'arrows': false,
		'dots': false,
		'prevArrow': '<button class="slick-prev"><svg class="icon icon-page-left">' + '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-page-left"></use>' + '</svg><span class="sr-only">Previous slide</span></button>',
		'nextArrow': '<button class="slick-next"><svg class="icon icon-page-right">' + '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-page-left"></use>' + '</svg><span class="sr-only">Next slide</span></button>'
	};

	var index = 0;
	var nextIndex = 0;
	var prevIndex = 0;
	var CSStransitionInProgress = false;
	var $dotsContainer;
	var $slidesContainer;
	var $slides;
	var slidesLength;

	// Merge any options set on the DOM element with 
	// the component defaults set above
	var options = $.extend(true, {}, defaults, params);

	/**
  * Called once on Component init
  */
	function bindEvents() {
		// Arrow click events
		$el.on('carousel.goPrev', goPrev);
		$el.on('carousel.goNext', goNext);

		// Dot click events
		$el.on('click', '.dots-component a', function (e) {
			e.preventDefault();

			// Find parent
			var $parent = $(this).closest('.dots-component');

			// Get index of this dot compared to siblings
			var index = $parent.find('a').index($(this));

			goTo(index - 1);
		});

		// Keyboard commands (left & right arrow keys)
		$('body').on('keydown', function (e) {
			// Left arrow key
			if (e.keyCode === 37) {
				$('.nav.prev', $el).click();
			}

			// Right arrow key
			if (e.keyCode === 39) {
				$('.nav.next', $el).click();
			}
		});

		// Bind to prev/next arrows
		$el.on('click', '.nav', function (e) {
			e.preventDefault();

			var direction = 'carousel.goNext';

			if ($(this).hasClass('prev')) {
				direction = 'carousel.goPrev';
			}

			$el.trigger(direction);
		});

		// Listen for CSS3 transition animation end
		$el.find('li').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
			CSStransitionInProgress = false;
		});

		// Paralax background images
		$('.slide', $el).each(function () {
			// Based on container height relative to viewport center
			var containerHeight = $(this).outerHeight();
			var containerOffsetTop = $(this).offset().top;
			var viewportHeight = $(window).outerHeight();
			var scrollStartThreshold = viewportHeight / 2 + containerHeight / 2;

			// Determine when image container top reaches the scroll start point
			$(this).attr('data-scroll-start', scrollStartThreshold);
		});

		// Auto-scroll every five seconds
		setInterval(function () {
			$('.nav.next', $el).click();
		}, 5000);
	}

	/**
  * Called from goPrev() and goNext()
  */
	function go() {
		// Indicate CSS transition is in progress
		CSStransitionInProgress = true;

		$slides.eq(index).removeClass('previous next').addClass('active');
		$slides.eq(prevIndex).removeClass('previous next active').addClass('previous');
		$slides.eq(nextIndex).removeClass('previous next active').addClass('next');

		updateDots(index);
		setResponsiveBackgroundImages();
	}

	function goNext() {
		// Proceed only if no CSS transition is in progress
		if (CSStransitionInProgress) return;

		// If current active slide isn't at the end
		// bump up index
		if (index < slidesLength) {
			index = index + 1;
			prevIndex = index - 1;

			// If current active slide still isn't at the end
			// bump up nextIndex
			if (index < slidesLength) {
				nextIndex = index + 1;
			} else {
				// Otherwise reset it to the beginning
				nextIndex = 0;
			}
		} else {
			index = 0;
			nextIndex = index + 1;
			prevIndex = slidesLength;
		}

		go();
	}

	function goPrev() {
		// Proceed only if no CSS transition is in progress
		if (CSStransitionInProgress) return;

		// If current active slide isn't at the beginning
		if (index > 0) {
			// drop down index
			index = index - 1;

			// [ ] [p] [i] [n] [ ]
			nextIndex = index + 1;

			// If current active slide still isn't at the end,
			if (index > 0) {
				// drop down prevIndex.
				// [p] [i] [n] [ ] [ ]
				prevIndex = index - 1;
			} else {
				// Otherwise, set it to the last slide
				// [i] [n] [ ] [ ] [p]
				prevIndex = $slides.length;
			}
		} else {
			// [n] [ ] [ ] [p] [i]
			index = slidesLength;
			nextIndex = 0;
			prevIndex = index - 1;
		}

		go();
	}

	/**
  * Called when clicking a dot
  */
	function goTo(arg) {
		// Determine whether to go next, prev, or nowhere (default)
		switch (true) {
			case arg > index:
				goNext();
				break;

			case index > arg:
				goPrev();
				break;

			default:
			// Do nothing (index === arg)
		}
	}

	/**
  * Adds a div for every slide's background image.
  * Doing it this way since the div lives outside the slide loop,
  * and we need to fade between backgrounds, so the index() needs to match
  */
	function insertBackgroundImageContainers() {
		// Loop over slides
		$('.slide', $el).each(function (index, value) {
			// Insert containers
			$('.slide-background-container', $el).append('<div class="slide-background" style="background-image:url(' + $(this).attr('data-background-image-source') + ')"></div>');
		});

		// Set initial active state
		$('.slide-background', $el).eq(0).addClass('active');
	}

	/**
  * Called once on Component init
  */
	function render() {
		$dotsContainer = $('.dots-component', $el);
		$slidesContainer = $('.slides', $el);
		$slides = $('.slides > li', $el);
		slidesLength = $slides.length - 1;

		insertBackgroundImageContainers();
		setActiveItems();
		setResponsiveBackgroundImages();
		setContentWrapperHeight();
	}

	/**
  * Initializes all default active states
  */
	function setActiveItems() {
		// - first LI of first UL
		$('.slides.active li', $el).eq(0).addClass('active');

		// Set active elements (because they aren't set via PHP):
		for (var x = 0; x < $slides.length; x++) {
			// Set next/prev of each slide
			switch (true) {
				// - first LI
				case x === 0:
					// $slidesContainer.eq(0).addClass('active');
					$slides.eq(x).addClass('active');
					break;

				// - last LI
				case x === $slides.length - 1:
					$slides.eq(x).addClass('previous');
					break;

				// - middle LIs
				default:
					$slides.eq(x).addClass('next');
					break;
			}
		}

		// Set active dot
		updateDots(0);
	}

	/**
  * Calculates the content height and adjusts the container height
  * since the content is positioned absolute and doesn't register height.
  */
	function setContentWrapperHeight() {
		var index = index || 0;
		var $thisContentHeight = $slides.eq(index).outerHeight(true);
		var additionalPadding = 0;

		// Add some bottom margin for the about page
		if ($('body').hasClass('page-about')) {
			additionalPadding = 120;
		}

		// Set height
		$('.slides', $el).css('height', $thisContentHeight + additionalPadding + 'px');

		// Remove relative positioning
		$('.slides .slide', $el).css('position', 'absolute');

		// If on About page, move the dots bar so it takes up the whole width
		if ($('body').hasClass('page-about')) {
			$('.dots-component', $el).each(function () {
				$(this).closest('.component-carousel').append(this);
			});
		}

		// console.log('$thisContentHeight: ', $thisContentHeight);
	}

	/**
  * Checks current breakpoint, and matches against data attributes
  * to determine which class to apply, matching the appropriate background image
  * NOTE: Only happens on page load. TODO: (DP) Improve this with better
  * responsive image function in utils.js.
  */
	function setResponsiveBackgroundImages() {
		// Check viewport and determine current mediaquery breakpoint
		// Match against each data attribute in $el slides
		// Set default background image (mobile)
		var backgroundURL = $slides.eq(index).attr('data-background-image-source');

		// - Determine which breakpoint we're using
		var breakpoint;

		// - by looping through hidden divs checking for visibility
		$('.breakpoint').each(function (ind, val) {
			if ($(this).is(':visible')) {
				breakpoint = $(this).attr('data-breakpoint');

				// Progressively update which background image to use,
				// if there is one available in the element's data attribute,
				if (typeof $slides.eq(index).attr('data-' + breakpoint + '-background-image-source') !== 'undefined') {
					// Found a match
					backgroundURL = $slides.eq(index).attr('data-' + breakpoint + '-background-image-source');
				}
			}
		});

		// - set $el background on parent container
		// $el.css({
		// 	'backgroundImage': 'url(' + backgroundURL + ')'
		// });

		// Fade out background


		// Replace background
		// Fade out all backgrounds
		$('.slide-background', $el).fadeOut();

		// Fade in new active background
		$('.slide-background', $el).eq(index).fadeIn();

		// $el.closest('.component-neighborhood-carousel').css({
		// 	'backgroundImage': 'url(' + backgroundURL + ')'
		// });

		// Fade in background
	}

	/**
  * Update the active dot.
  * @param {Number} current - Zero-based current slide number.
  */
	function updateDots(current) {
		$dotsContainer.each(function () {
			$(this).find('li.dot').removeClass('active');
			$(this).find('li.dot').eq(current).addClass('active');
		});
	}

	this.init = function ($el) {
		bindEvents();
		render();

		return this;
	};

	return this.init($el);
}

exports.default = TwentyBroadCarousel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * QB Twenty Broad Neighborhood Carousel component
 */
function TwentyBroadNeighborhoodCarousel($el) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var defaults = {
		'accessibility': true,
		'arrows': false,
		'dots': false,
		'prevArrow': '<button class="slick-prev"><svg class="icon icon-page-left">' + '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-page-left"></use>' + '</svg><span class="sr-only">Previous slide</span></button>',
		'nextArrow': '<button class="slick-next"><svg class="icon icon-page-right">' + '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-page-left"></use>' + '</svg><span class="sr-only">Next slide</span></button>'
	};

	var index = 0;
	var nextIndex = 0;
	var prevIndex = 0;
	var CSStransitionInProgress = false;
	var $dotsContainer;
	var $slidesContainer;
	var $slides;
	var slidesLength;

	// Merge any options set on the DOM element with 
	// the component defaults set above
	var options = $.extend(true, {}, defaults, params);

	/**
  * Called once on Component init
  */
	function bindEvents() {
		// Arrow click events
		$el.on('carousel.goPrev', goPrev);
		$el.on('carousel.goNext', goNext);

		// Dot click events
		$el.on('click', '.dots-component a', function (e) {
			e.preventDefault();

			// Find parent
			var $parent = $(this).closest('.dots-component');

			// Get index of this dot compared to siblings
			var index = $parent.find('a').index($(this));

			goTo(index - 1);
		});

		// Keyboard commands (left & right arrow keys)
		$('body').on('keydown', function (e) {
			// Left arrow key
			if (e.keyCode === 37) {
				$('.nav.prev', $el).click();
			}

			// Right arrow key
			if (e.keyCode === 39) {
				$('.nav.next', $el).click();
			}
		});

		// Bind to prev/next arrows
		$el.on('click', '.nav', function (e) {
			e.preventDefault();

			var direction = 'carousel.goNext';

			if ($(this).hasClass('prev')) {
				direction = 'carousel.goPrev';
			}

			$el.trigger(direction);
		});

		// Listen for CSS3 transition animation end
		$el.find('li').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
			CSStransitionInProgress = false;
		});

		// Paralax background images
		$('.slide', $el).each(function () {
			// Based on container height relative to viewport center
			var containerHeight = $(this).outerHeight();
			var containerOffsetTop = $(this).offset().top;
			var viewportHeight = $(window).outerHeight();
			var scrollStartThreshold = viewportHeight / 2 + containerHeight / 2;

			// Determine when image container top reaches the scroll start point
			$(this).attr('data-scroll-start', scrollStartThreshold);
		});

		// Auto-scroll every five seconds
		setInterval(function () {
			$('.nav.next', $el).click();
		}, 5000);
	}

	/**
  * Called from goPrev() and goNext()
  */
	function go() {
		// Indicate CSS transition is in progress
		CSStransitionInProgress = true;

		$slides.eq(index).removeClass('previous next').addClass('active');
		$slides.eq(prevIndex).removeClass('previous next active').addClass('previous');
		$slides.eq(nextIndex).removeClass('previous next active').addClass('next');

		updateDots(index);
		setResponsiveBackgroundImages();
	}

	function goNext() {
		// Proceed only if no CSS transition is in progress
		if (CSStransitionInProgress) return;

		// If current active slide isn't at the end
		// bump up index
		if (index < slidesLength) {
			index = index + 1;
			prevIndex = index - 1;

			// If current active slide still isn't at the end
			// bump up nextIndex
			if (index < slidesLength) {
				nextIndex = index + 1;
			} else {
				// Otherwise reset it to the beginning
				nextIndex = 0;
			}
		} else {
			index = 0;
			nextIndex = index + 1;
			prevIndex = slidesLength;
		}

		go();
	}

	function goPrev() {
		// Proceed only if no CSS transition is in progress
		if (CSStransitionInProgress) return;

		// If current active slide isn't at the beginning
		if (index > 0) {
			// drop down index
			index = index - 1;

			// [ ] [p] [i] [n] [ ]
			nextIndex = index + 1;

			// If current active slide still isn't at the end,
			if (index > 0) {
				// drop down prevIndex.
				// [p] [i] [n] [ ] [ ]
				prevIndex = index - 1;
			} else {
				// Otherwise, set it to the last slide
				// [i] [n] [ ] [ ] [p]
				prevIndex = $slides.length;
			}
		} else {
			// [n] [ ] [ ] [p] [i]
			index = slidesLength;
			nextIndex = 0;
			prevIndex = index - 1;
		}

		go();
	}

	/**
  * Called when clicking a dot
  */
	function goTo(arg) {
		// Determine whether to go next, prev, or nowhere (default)
		switch (true) {
			case arg > index:
				goNext();
				break;

			case index > arg:
				goPrev();
				break;

			default:
			// Do nothing (index === arg)
		}
	}

	/**
  * Adds a div for every slide's background image.
  * Doing it this way since the div lives outside the slide loop,
  * and we need to fade between backgrounds, so the index() needs to match
  */
	function insertBackgroundImageContainers() {
		// Loop over slides
		$('.slide', $el).each(function (index, value) {
			// Insert containers
			$('.slide-background-container', $el).append('<div class="slide-background" style="background-image:url(' + $(this).attr('data-background-image-source') + ')"></div>');
		});

		// Set initial active state
		$('.slide-background', $el).eq(0).addClass('active');
	}

	/**
  * Called once on Component init
  */
	function render() {
		$dotsContainer = $('.dots-component', $el);
		$slidesContainer = $('.slides', $el);
		$slides = $('.slides > li', $el);
		slidesLength = $slides.length - 1;

		insertBackgroundImageContainers();
		setActiveItems();
		setResponsiveBackgroundImages();
		setContentWrapperHeight();
	}

	/**
  * Initializes all default active states
  */
	function setActiveItems() {
		// - first LI of first UL
		$('.slides.active li', $el).eq(0).addClass('active');

		// Set active elements (because they aren't set via PHP):
		for (var x = 0; x < $slides.length; x++) {
			// Set next/prev of each slide
			switch (true) {
				// - first LI
				case x === 0:
					// $slidesContainer.eq(0).addClass('active');
					$slides.eq(x).addClass('active');
					break;

				// - last LI
				case x === $slides.length - 1:
					$slides.eq(x).addClass('previous');
					break;

				// - middle LIs
				default:
					$slides.eq(x).addClass('next');
					break;
			}
		}

		// Set active dot
		updateDots(0);
	}

	/**
  * Calculates the content height and adjusts the container height
  * since the content is positioned absolute and doesn't register height.
  */
	function setContentWrapperHeight() {
		var index = index || 0;
		var $thisContentHeight = $slides.eq(index).outerHeight(true);

		$('.slides', $el).css('height', $thisContentHeight + 'px');

		console.log('$thisContentHeight: ', $thisContentHeight);
	}

	/**
  * Checks current breakpoint, and matches against data attributes
  * to determine which class to apply, matching the appropriate background image
  * NOTE: Only happens on page load. TODO: (DP) Improve this with better
  * responsive image function in utils.js.
  */
	function setResponsiveBackgroundImages() {
		// Check viewport and determine current mediaquery breakpoint
		// Match against each data attribute in $el slides
		// Set default background image (mobile)
		var backgroundURL = $slides.eq(index).attr('data-background-image-source');

		// - Determine which breakpoint we're using
		var breakpoint;

		// - by looping through hidden divs checking for visibility
		$('.breakpoint').each(function (ind, val) {
			if ($(this).is(':visible')) {
				breakpoint = $(this).attr('data-breakpoint');

				// Progressively update which background image to use,
				// if there is one available in the element's data attribute,
				if (typeof $slides.eq(index).attr('data-' + breakpoint + '-background-image-source') !== 'undefined') {
					// Found a match
					backgroundURL = $slides.eq(index).attr('data-' + breakpoint + '-background-image-source');
				}
			}
		});

		// - set $el background on parent container
		// $el.css({
		// 	'backgroundImage': 'url(' + backgroundURL + ')'
		// });

		// Fade out background


		// Replace background
		// Fade out all backgrounds
		$('.slide-background', $el).fadeOut();

		// Fade in new active background
		$('.slide-background', $el).eq(index).fadeIn();

		// $el.closest('.component-neighborhood-carousel').css({
		// 	'backgroundImage': 'url(' + backgroundURL + ')'
		// });

		// Fade in background
	}

	/**
  * Update the active dot.
  * @param {Number} current - Zero-based current slide number.
  */
	function updateDots(current) {
		$dotsContainer.each(function () {
			$(this).find('li.dot').removeClass('active');
			$(this).find('li.dot').eq(current).addClass('active');
		});
	}

	this.init = function ($el) {
		bindEvents();
		render();

		return this;
	};

	return this.init($el);
}

exports.default = TwentyBroadNeighborhoodCarousel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Analytics component
 */
function Analytics($el) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var defaults = {};

	// Merge any options set on the DOM element with 
	// the component defaults set above
	var options = $.extend(true, {}, defaults, params);

	function bindEvents() {
		// console.log('Analytics component loaded');
	}

	this.init = function ($el) {
		bindEvents();

		return this;
	};

	return this.init($el);
}

exports.default = Analytics;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function CustomMap($el) {
    this.getImage = function (type) {
        switch (type) {
            case 'hotel':
                return 'http://placebear.com/15/15';
            case 'residence':
                return 'http://placebear.com/20/15';
            case 'study':
                return 'http://placebear.com/15/10';
            default:
                return 'http://placebear.com/10/15';
        }
    };

    this.initMarkerPopUp = function (marker) {
        marker.onclick = function () {
            var popup = this.querySelector('.marker-popup');

            if (popup) {
                popup.classList.toggle("show");
            }
        };
    };

    this.updateMarkerPosition = function (marker, map) {
        var _marker$dataset = marker.dataset,
            x = _marker$dataset.x,
            y = _marker$dataset.y;
        var _map$dataset = map.dataset,
            originalWidth = _map$dataset.originalWidth,
            originalHeight = _map$dataset.originalHeight;


        var currentWidth = map.clientWidth;
        var currentHeight = map.clientHeight;

        var xRatio = currentWidth / originalWidth;
        var yRatio = currentHeight / originalHeight;

        marker.style.left = x * xRatio + 'px';
        marker.style.bottom = y * yRatio + 'px';
    };

    this.updateMarkerStyle = function (marker) {
        marker.style['background-image'] = 'url(\'' + this.getImage(marker.dataset.type) + '\')';
        marker.style.display = 'block';
    };

    this.updateMarkers = function (map, markers) {
        var _this = this;

        markers.forEach(function (marker) {
            _this.initMarkerPopUp(marker);
            _this.updateMarkerPosition(marker, map);
            _this.updateMarkerStyle(marker);
        });
    };

    this.init = function () {
        var _this2 = this;

        var map = document.querySelector('.map-wrapper');
        var markers = document.querySelectorAll('.map-marker');

        this.updateMarkers(map, markers);
        window.onresize = function (map, markers) {
            return function () {
                return _this2.updateMarkers(map, markers);
            };
        }(map, markers);

        return this;
    };

    return this.init();
}

exports.default = CustomMap;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _attck = __webpack_require__(1);

var _attck2 = _interopRequireDefault(_attck);

var _cachedDomElements = __webpack_require__(2);

var _cachedDomElements2 = _interopRequireDefault(_cachedDomElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fade In Elements component
 * Fades in hidden elements when user scrolls them far enough into view
 */
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
			scrollThreshold = _viewportHeight * .8;
		}
		_currentScrollTop = $(window).scrollTop();

		$.each((0, _cachedDomElements2.default)('.fade-me-in'), function (index, value) {
			var verticalScrollThreshold = _currentScrollTop + scrollThreshold;
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

	this.init = function ($el) {
		bindEvents();
		hideAllElements();

		// Start scroll timer
		setInterval(function () {
			checkTimer();
		}, 100);

		return this;
	};

	return this.init($el);
}

exports.default = FadeInElements;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  /**
   * Returns an object with references to several form components.
   *
   * @param {Event} e
   * @returns {{$form: jQuery, $contentWrapper: jQuery}}
   */
  function resolveFormElements(e) {
    // Form that is sent.
    var $form = $('#' + e.detail.id);

    // Form wrapper, this element wraps the "thank you" message too.
    var $contentWrapper = $form.parent('.content-wrapper');

    return { $form: $form, $contentWrapper: $contentWrapper };
  }

  /*
   * Disable all submit buttons to avoid user clicking it over and over again.
   * The buttons will be enabled when the wpcf7submit event occurs.
   */
  // $('.wpcf7-form').on('submit', function (e) {
  //     $(this).find('input[type=submit]').attr('disabled', 'disabled');
  // });

  /*
   * Listen for the event when the form is sent, regardless of the result.
   */
  // document.addEventListener('wpcf7submit', function (e) {
  //     const {$form} = resolveFormElements(e);
  //     $form.find('input[type=submit]').removeAttr('disabled');
  // });

  /*
   * Listen for the event when the mail is sent successfully.
   */
  // document.addEventListener('wpcf7mailsent', function (e) {
  //     const {$form, $contentWrapper} = resolveFormElements(e);

  //     // Form wrapper, this element wraps the "thank you" message too.
  //     const $thankYouMessage = $contentWrapper.find('.contact-thankyou');

  //     // Fadeout the form and then fade in the "thank you" message.
  //     $form.fadeOut(250, function () {
  //         $thankYouMessage.fadeIn(250);
  //     });
  // });

  /*
   * Listen for the event when mail failed to send.
   */
  document.addEventListener('wpcf7mailfailed', function (e) {
    var _resolveFormElements = resolveFormElements(e),
        $contentWrapper = _resolveFormElements.$contentWrapper;

    var $errorMessage = $contentWrapper.find('.contact-fail');

    $errorMessage.fadeIn(250);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
			value: true
});

var _attck = __webpack_require__(1);

var _attck2 = _interopRequireDefault(_attck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			};

			return this.init($el);
}

exports.default = Nav;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cachedDomElements = __webpack_require__(2);

var _cachedDomElements2 = _interopRequireDefault(_cachedDomElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Parallax($el) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var defaults = {};

	// Merge any options set on the DOM element with 
	// the component defaults set above
	var options = $.extend(true, {}, defaults, params);
	var viewportHeight = $(window).outerHeight();
	var scrollStartThreshold = parseInt($el.attr("data-scroll-start"), 10) - viewportHeight * .2;
	var $elOuterHeight = $el.outerHeight();

	function bindEvents() {
		// Start offsetting the background-position-y value 
		// on scroll when we reach data-scroll-start		
		$(document.body).on('ATTCK.scroll', parallaxGo);

		// Prevent .tall-hero from affecting body height when 
		// scrolling on mobile, which due to the changing size of the
		// address bar, causes jankyness all the way down the page
		var viewportHeight = $(window).outerHeight(true);
		$('.tall-hero').css('height', viewportHeight * .7);
	}

	function calculateScrollStart() {
		// Based on container height relative to viewport center
		var containerHeight = $el.outerHeight();
		var containerOffsetTop = $el.offset().top;
		viewportHeight = $(window).outerHeight();
		scrollStartThreshold = viewportHeight / 2 + containerHeight / 2;

		// Determine when image container top reaches the scroll start point
		$el.attr('data-scroll-start', scrollStartThreshold);
	}

	function parallaxGo(e, data) {
		var distanceToViewportTop = $el.offset().top - data.currentScrollTop;
		var distanceScrolled = data.currentScrollTop;

		if (scrollStartThreshold > distanceToViewportTop) {
			// Determine how much to offset the background position 
			// based on scroll distance relative to $el height
			// % per px, need to move 10%
			var relativePercentOfContainerToViewport = $elOuterHeight / viewportHeight;
			var percentToScrollPerPixel = relativePercentOfContainerToViewport / 10;
			var totalPixelsScrolledWithinThreshold = scrollStartThreshold - distanceToViewportTop;
			var offsetPerPxScrolled = $elOuterHeight * .01;
			var percentOffsetFromScroll = (data.currentScrollTop - scrollStartThreshold) / offsetPerPxScrolled;

			// Set default offset
			var defaultOffset = 0;
			var finalOffset = defaultOffset - percentToScrollPerPixel * totalPixelsScrolledWithinThreshold / 2;
			var lowerBounds = -100;
			var upperBounds = 100;

			// console.log('finalOffset, lowerBounds, upperBounds: ', finalOffset, lowerBounds, upperBounds);

			// If we're within the sweet spot
			if (finalOffset > lowerBounds && finalOffset < upperBounds) {
				// Move the background
				finalOffset = finalOffset - percentToScrollPerPixel * totalPixelsScrolledWithinThreshold / 2;
			}

			// Enforce lower bounds
			if (finalOffset < lowerBounds) {
				finalOffset = lowerBounds;
			}

			// Enforce upper bounds
			if (finalOffset > upperBounds) {
				finalOffset = upperBounds;
			}

			// console.log('Parallax.js > finalOffset: ', finalOffset, $el.prop('nodeName'));
			// TODO: (DP) Add different effects for each element
			if ($el.prop('nodeName') === 'DIV') {
				var validContent = true;

				// Don't apply this effect to...
				switch (true) {
					// containers with H1 inside
					case $el.find('h1').length > 0:
						validContent = false;
						break;

					// elements with .no-parallax class and their children
					case $el.hasClass('.no-parallax') || $el.find('.no-parallax').length > 0:
						validContent = false;
						break;

					// elements with .no-parallax parents
					case $el.closest('.no-parallax').length > 0:
						validContent = false;
						break;

					// map elements
					case $el.find('#mapbox').length > 0:
						validContent = false;
						break;

					// map elements
					case $el.find('.component-map').length > 0:
						validContent = false;
						break;

					// elements with forms in them
					case $el.find('form').length > 0:
						validContent = false;
						break;

					default:
						break;
				}

				if (validContent) {
					$el.css({
						'position': 'relative',
						// 'top': (finalOffset * 1.5) + 'px'
						'transform': 'translate3d(0, ' + finalOffset * 1.5 + 'px' + ', 0)'
					});
				}
			} else {
				// Move background forwards
				$el.css({
					'background-position': 'center ' + finalOffset * -1 + '%'
				});
			}
		}
	}

	// Animations won't apply to elemnents that aren't 
	// positioned with a default top value
	function setDefaultStyles() {
		$el.css({
			'position': 'relative',
			'top': 0
		});
	}

	this.init = function ($el) {
		bindEvents();
		calculateScrollStart();
		// setDefaultStyles();

		// Make sure any visible parallax elements are properly set on 
		// page load otherwise they jump on first scroll
		parallaxGo({}, {
			'currentScrollTop': $(window).scrollTop()
		});

		return this;
	};

	return this.init($el);
} /**
   * Parallax component
   */
exports.default = Parallax;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function ScrollIndicator($el) {
    var _this = this;

    this.createAreas = function (areasDOM) {
        var height = 0,
            top = 0;

        return areasDOM.map(function (area) {
            height = area.clientHeight;
            top = $(area).offset().top;

            return { minLimit: top, maxLimit: top + height, scrollColor: area.dataset.scrollColor };
        });
    };

    // check in zone
    this.isInArea = function ($scroller, areas) {
        var scrollerTop = $scroller.offset().top;
        var areaIn = areas.findIndex(function (area) {
            return scrollerTop >= area.minLimit && scrollerTop < area.maxLimit;
        });

        if (areaIn < 0) return false;

        $scroller.css('background', areas[areaIn].scrollColor);
    };

    this.scrolled = function (scroller, scrollerTop, bounds, areas) {
        return function () {
            var $scroller = $(scroller);
            var scrollDistance = $(window).scrollTop();
            var left = bounds.left;


            if (scrollDistance + 100 >= scrollerTop) {
                if (!$scroller.hasClass('lock')) {
                    var newTop = scrollerTop - scrollDistance;
                    if (newTop > areas[0].minLimit) newTop = areas[0].minLimit;

                    if (newTop + $scroller.height() > areas[areas.length - 1].maxLimit) newTop = areas[areas.length - 1].maxLimit - $scroller.height();

                    $scroller.addClass('lock');
                    scroller.style.top = newTop + 'px';
                    scroller.style.left = left + $scroller.width() / 2 + 'px';
                }

                _this.isInArea($scroller, areas);
            } else {
                $scroller.removeClass('lock');
            }
        };
    };

    this.init = function ($el) {
        var scroller = document.querySelector('.scroll-indicator');
        var areas = document.querySelectorAll('.category-detail');

        if (!areas.length) return;

        areas = this.createAreas([].concat(_toConsumableArray(areas)));

        document.onscroll = this.scrolled(scroller, $(scroller).offset().top, scroller.getBoundingClientRect(), areas);

        return this;
    };

    return this.init($el);
}

exports.default = ScrollIndicator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _attck = __webpack_require__(1);

var _attck2 = _interopRequireDefault(_attck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = {
	// Set to true temporarily to enable custom debugging tools.
	debug: false,

	breakpoints: ["xs", "sm", "md", "lg", "xl"]
}; /**
    * Global configuration options go here.
    */
exports.default = Config;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map