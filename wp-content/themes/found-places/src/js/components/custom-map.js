import Popper from 'popper.js'

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

    this.initMarkerPopUp = function(marker){
        const popper = document.querySelector('.marker-popup')
        const container = document.querySelector('.image-wrapper')

        new Popper(
            marker,
            popper,
            {
                placement: 'top',
                modifiers: {
                    flip: {
                        behavior: ['bottom', 'top']
                    },
                    preventOverflow: {
                        boundariesElement: container,
                    },
                },
            }
        );

        marker.onclick = function(){
            if(popper) {
                popper.classList.toggle("show");
            }
        }
    }

    this.updateMarkerPosition = function(marker, map){
        const { x, y } = marker.dataset
        const { naturalWidth, naturalHeight } = map

        const currentWidth = map.clientWidth
        const currentHeight = map.clientHeight

        const xRatio = currentWidth / naturalWidth
        const yRatio = currentHeight / naturalHeight

        marker.style.left = `${x * xRatio}px`;
        marker.style.bottom = `${y * yRatio}px`;
    }

    this.updateMarkerStyle = function(marker){
        marker.style['background-image'] = `url('${this.getImage(marker.dataset.type)}')`
        marker.style.display = 'block';
    }

    this.updateMarkers = function(map, markers){
        markers.forEach(marker => {
            this.initMarkerPopUp(marker)
            this.updateMarkerPosition(marker, map)
            this.updateMarkerStyle(marker)
        })
    }

    this.init = function() {
        $('document').ready(() => {
            const map = document.querySelector('.map-wrapper')
            const markers = document.querySelectorAll('.map-marker')

            this.updateMarkers(map, markers)
            window.onresize = ((map, markers) => () => this.updateMarkers(map, markers))(map, markers)
        });

        return this;
    }

    return this.init();
}

export default CustomMap;
