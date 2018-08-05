function CustomMap ($el) {
    this.getImage = (type) => {
        switch (type){
            case 'hotel':
                return 'http://placebear.com/15/15'
            case 'residence':
                return 'http://placebear.com/20/15'
            case 'study':
                return 'http://placebear.com/15/10'
            default:
                return 'http://placebear.com/10/15'
        }
    }

    this.positionAndStyleMarker = function(marker, map){
        const { x, y, type } = marker.dataset
        const { originalWidth, originalHeight } = map.dataset

        const currentWidth = map.clientWidth
        const currentHeight = map.clientHeight

        const xRatio = currentWidth / originalWidth
        const yRatio = currentHeight / originalHeight

        marker.style.left = `${x * xRatio}px`;
        marker.style.bottom = `${y * yRatio}px`;
        marker.style['background-image'] = `url('${this.getImage(type)}')`
        marker.style.display = 'block';
    }

    this.init = function($el) {
        const map = document.querySelector('.map-wrapper')
        const markers = document.querySelectorAll('.map-marker')

        markers.forEach(marker => this.positionAndStyleMarker(marker, map))

        return this;
    }

    return this.init($el);
}

export default CustomMap;
