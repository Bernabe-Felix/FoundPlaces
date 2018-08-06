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
                let newTop = scrollerTop - scrollDistance
                // if(newTop > areas[0].minLimit)
                //     newTop = areas[0].minLimit

                // if(newTop + $scroller.height() > areas[areas.length - 1].maxLimit)
                //     newTop = areas[areas.length - 1].maxLimit - $scroller.height()

                $scroller.addClass('lock')
                scroller.style.top = `${newTop }px`
                scroller.style.left = `${left + ($scroller.width() / 2)}px`
            }

            this.isInArea($scroller, areas)
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
