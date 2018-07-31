/**
 * Contact Modal CTA component
 * Responsible for toggling contact form modal visibility
 */
function ContactModalCTA($el) {
	function bindEvents() {
		$('.button', $el).on('click', function () {
			$('.component-contact-modal, .component-contact-modal-overlay').toggleClass('visible');

			// Make sure animation is triggered after display is toggled,
			// otherwise, animation isn't seen.
			setTimeout(function () {
				$('body').toggleClass('showContactModal');
			}, 10);

		});
		
		// Highlight submit button on press/mousedown
		$('.button.button-modal', $el).on('mousedown touchstart', function () {
			$(this).addClass('mousedown');
		});

		$(document.body).on('mouseup touchend', function () {
			$('.button.button-modal').removeClass('mousedown');
		});
	}

	function initShine() {
		var _largestDiff = 0;
		var _prevXVal = 0;

		startFadeSwapTimer();

		$('<div class="shine-gradient-component"></div>').insertAfter('#lottie h1');
		// console.log('shine-gradient-component: ', $('.shine-gradient-component'));

		// Attach mouse movements for desktop
		document.getElementsByClassName('shine-gradient-component')[0].addEventListener('mousemove', function (e) {
			// console.log('e.clientX: ', e.clientX);

			// Mock the accelerometer data structure
			onDeviceMotion({
				'accelerationIncludingGravity': {
					'x': ((e.clientX - 500) / 100),
					'y': 0,
					'z': 0
				}
			});
		}, false);

		// Attach device tilting events for mobile
		window.addEventListener("devicemotion", onDeviceMotion, false);

		function onDeviceMotion(event) {
			var accel = event.accelerationIncludingGravity;

			// Default is x axis
			var accelWhich = accel.x;

			// Compare which accel axis is greater
			// if (accel.y > accel.x) accelWhich = accel.y;
			// if (accel.z > accel.y) accelWhich = accel.z;

			// If next value is too large, skip it
			if (Math.abs(accelWhich) - Math.abs(_prevXVal) > 5) {
				_prevXVal = accelWhich;
				return;
			}

			// If next value is too small, skip it
			if (Math.abs(accelWhich) - Math.abs(_prevXVal) > .2) {
				_prevXVal = accelWhich;
				// return;
			}

			// Smooth out animation
			var roundXVal = (accelWhich + _prevXVal) * .25;
			_prevXVal = accelWhich;

			var lowVal = (roundXVal * 8) + 20;
			var midVal = (roundXVal * 10) + 50;
			var highVal = (roundXVal * -12) + 50;

			var linearGradient = [
				'linear-gradient(135deg, ',
				'rgba(187,144,77,0) 0%, ',
				'rgba(168,126,68,1) ', midVal-10 ,'%, ',
				'rgba(186,130,46,1) ', midVal ,'%, ',
				'rgba(168,126,68,1) ', midVal+10 ,'%, ',
				'rgba(187,144,77,0) 100%',
				');'
			].join('');

			$('.shine-gradient-component').attr('style', 
				'background-image: ' + linearGradient
			);
		}

		function startFadeSwapTimer() {
			setTimeout(function () {
				$('#lottie svg').fadeOut('slow');
				$('.shine-gradient-component').addClass('active');
			}, 2000);
		}
	}

	this.init = function ($el) {
		console.log('contact-modal-cta.js > init()');

		bindEvents();

		// Hijacking this component instead of modifying markup. 
		// It should, in principle, live in its own component.
		initShine();

		return this;
	}

	return this.init($el);
}

export default ContactModalCTA;
