// Gallery

function Gallery ($el) {
	function nextSlide(e) {
		//slide nextslide
		var thisSlide = $('.activeSlide');
		var next = $(thisSlide).next();
		var slideId = $(thisSlide).attr('id');
		var slideNo = slideId.replace('slide-', '');
		var nextSlide = parseInt(slideNo)+1;

		if ($(next).length) {
		    $(next).addClass('activeSlide').siblings().removeClass('activeSlide'); 

		}
		else {
		    $('.slide:first').addClass('activeSlide').siblings().removeClass('activeSlide'); 

		}
	}


	function prevSlide() {
		var thisSlide = $('.activeSlide');
		var prev = $(thisSlide).prev();
		var slideId = $(thisSlide).attr('id');
		var slideNo = slideId.replace('slide-', '');
		var prevSlide = parseInt(slideNo)-1;

		if ($(prev).length) {
		    $(prev).addClass('activeSlide').siblings().removeClass('activeSlide'); 

		}
		else {
		    $('.slide:last').addClass('activeSlide').siblings().removeClass('activeSlide'); 
		}

	}
	
	function thumbnails(){
		//slider thumbnails
		var slides = $('.gallery-items');
		var slideId = $(this).data('slide-id');
		$(slides).find('#'+slideId).addClass('activeSlide').siblings().removeClass('activeSlide');
		$(this).addClass('activeSlide').siblings().removeClass('activeSlide');
	   
	}

	function closeSlideshow() {
		$('body').removeClass('showSlideshow');
	}

	function openSlideshow() {
		$('body').addClass('showSlideshow');
	}
	
	function keyCommands() {

		//key commands for slideshow
		$(document).keydown(function(e){
		    if (e.keyCode == 37) { 
		       prevSlide();
		    }

		    if (e.keyCode == 39) { 
		       nextSlide();
		    }

		    if (e.keyCode == 27) { 
				$('body').removeClass('showSlideshow');
		    }

		});
		
	}


	this.init = function($el) {
		$el.find('.next').on('click', nextSlide);
		$el.find('.prev').on('click', prevSlide);
		$el.find('#closeSlideshow').on('click', closeSlideshow);
		$el.find('.openSlideshow').on('click', openSlideshow);
		$el.find('.gallery-thumb').on('click', thumbnails);
		keyCommands();
		return this;
		
	}

	return this.init($el);
}

export default Gallery;
