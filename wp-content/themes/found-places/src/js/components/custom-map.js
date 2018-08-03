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

    this.positionAndStyleMarker = function(marker, mapDataset){
        const { x, y, type } = marker.dataset

        marker.style.left = `${x}px`;
        marker.style.bottom = `${y}px`;
        marker.style['background-image'] = `url('${this.getImage(type)}')`
        marker.style.display = 'block';
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
