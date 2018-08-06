// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function ScrollIndicator ($el) {
    this.createAreas = (areasDOM) => {
        let height = 0, top = 0

        return areasDOM.map(area => {
            height = area.clientHeight
            top = $(area).offset().top

            return { minLimit: top, maxLimit: top + height, scrollColor: area.dataset.scrollColor }
        })
    }

    // check in zone
    this.isInArea = ($scroller, areas) => {
        const scrollerTop = $scroller.offset().top
        const areaIn = areas.findIndex(area => {
            return scrollerTop >= area.minLimit && scrollerTop < area.maxLimit
        })

        if(areaIn < 0) return false

        $scroller.css('background', areas[areaIn].scrollColor)
    }

    this.scrolled = (scroller, scrollerTop, bounds, areas) => () => {
        const $scroller = $(scroller)
        const scrollDistance = $(window).scrollTop()
        const { left } = bounds

        if(scrollDistance + 40 >= scrollerTop) {
            if(!$scroller.hasClass('lock')){
                const newTop = scrollerTop - scrollDistance

                $scroller.addClass('lock')
                scroller.style.top = `${newTop}px`
                scroller.style.left = `${left + ($scroller.width() / 2)}px`
            }

            this.isInArea($scroller, areas)
        } else {
            scroller.style.top = `40px`
            $scroller.removeClass('lock')
        }
    }

    this.init = function($el) {
        const scroller = document.querySelector('.scroll-indicator')
        let areas = document.querySelectorAll('.category-detail')

        if(!areas.length) return

        areas = this.createAreas([...areas])

        $(document).ready(() => {
            document.onscroll = this.scrolled(
                scroller,
                $(scroller).offset().top,
                scroller.getBoundingClientRect(),
                areas)
        })

        return this;
    }

    return this.init($el);
}

export default ScrollIndicator;
