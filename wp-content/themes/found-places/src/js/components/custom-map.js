function CustomMap ($el) {
    this.positionAndStyleMarker = function(marker){
        console.log(marker.dataset)
    }

    this.init = function($el) {
        const map = document.querySelector('.map-wrapper')
        const markers = document.querySelectorAll('.map-marker')

        markers.forEach(marker => this.positionAndStyleMarker(marker, map.dataset))

        return this;
    }

    return this.init($el);
}

export default CustomMap;
