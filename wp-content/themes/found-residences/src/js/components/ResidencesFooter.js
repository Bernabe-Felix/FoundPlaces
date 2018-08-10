function ResidencesFooter($el) {

    this.updateBorderPosition = function(items){
        items.each(function(){
            const $item = $(this)
            $item.addClass('dynamic-border')

            if($item.height() > parseInt($item.css('line-height'), 10)) {
                $item.addClass('in-the-middle')
            } else {
                $item.removeClass('in-the-middle')
            }
        })
    }

    this.init = function($el) {
        $el = $el;
        const links = $el.find('.menu-item')

        this.updateBorderPosition(links)

        window.onresize = () => this.updateBorderPosition(links)

        return this;
    }

    return this.init($el);
}

export default ResidencesFooter;
