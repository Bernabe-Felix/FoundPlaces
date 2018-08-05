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

    this.updateMarkerPosition = function(marker, map){
        const { x, y } = marker.dataset
        const { originalWidth, originalHeight } = map.dataset

        const currentWidth = map.clientWidth
        const currentHeight = map.clientHeight

        const xRatio = currentWidth / originalWidth
        const yRatio = currentHeight / originalHeight

        marker.style.left = `${x * xRatio}px`;
        marker.style.bottom = `${y * yRatio}px`;
    }

    this.updateMarkerStyle = function(marker){
        marker.style['background-image'] = `url('${this.getImage(marker.dataset.type)}')`
        marker.style.display = 'block';
    }

    this.updateMarkers = function(map, markers){
        markers.forEach(marker => {
            this.updateMarkerPosition(marker, map)
            this.updateMarkerStyle(marker)
        })
    }

    this.init = function() {
        const map = document.querySelector('.map-wrapper')
        const markers = document.querySelectorAll('.map-marker')

        this.updateMarkers(map, markers)
        window.onresize = ((map, markers) => () => this.updateMarkers(map, markers))(map, markers)

        return this;
    }

    return this.init();
}

export default CustomMap;
