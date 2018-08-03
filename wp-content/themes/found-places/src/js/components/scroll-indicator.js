function ScrollIndicator ($el) {
    this.createAreas = (areasDOM) => {
        let height = 0, top = 0

        return areasDOM.map(area => {
            height = areasDOM.clientHeight
            top = $(area).offset()

            return { minLimit: top, maxLimit: top + height }
        })
    }

    // move with scroll
    // check in zone

    this.scrolled = (scroller, scrollerTop, bounds, areas) => () => {
        const $scroller = $(scroller)
        const scrollDistance = $(window).scrollTop()
        const { top, left } = bounds


        console.log(scrollerTop)
        console.log(scrollDistance)

        if(scrollDistance + 100 >= scrollerTop) {
            $scroller.addClass('lock')
            scroller.style.top = `${top}px`
            scroller.style.left = `${left + ($scroller.width() / 2)}px`
        } else {
            $scroller.removeClass('lock')
        }
    }

    this.init = function($el) {
        const scroller = document.querySelector('.scroll-indicator')
        let areas = document.querySelectorAll('.category-detail')

        if(!areas.length) return

        areas = this.createAreas([...areas])

        document.onscroll = this.scrolled(
            scroller,
            $(scroller).offset().top,
            scroller.getBoundingClientRect(),
            areas)

        return this;
    }

    return this.init($el);
}

export default ScrollIndicator;
