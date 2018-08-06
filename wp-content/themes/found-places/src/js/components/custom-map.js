import Popper from 'popper.js'

function CustomMap ($el) {
    this.initMarkerPopUp = function(marker, map){
        const popper = document.querySelector('.marker-popup')

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
                        boundariesElement: map,
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

        const markerWidth = marker.clientWidth
        const markerHeight  = marker.clientHeight

        const xRatio = currentWidth / naturalWidth
        const yRatio = currentHeight / naturalHeight

        marker.style.left = `${ x * xRatio - (markerWidth / 2 ) }px`;
        marker.style.top = `${ y * yRatio - (markerHeight / 2 ) }px`;
    }

    this.updateMarkers = function(map, markers){
        markers.forEach(marker => {
            this.initMarkerPopUp(marker, map)
            this.updateMarkerPosition(marker, map)
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
