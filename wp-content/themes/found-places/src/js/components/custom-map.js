import Popper from 'popper.js'

function CustomMap ($el) {
    this.initMarkerPopUp = function(marker, map){
        const { x, y } = marker.dataset
        const popper = document.querySelector(`.marker-popup.coords-${x}-${y}`)
        const closeButton = popper.querySelector('.popup-close')

        const togglePopover = function(){
            if(popper) {
                popper.classList.toggle("show");
            }
        }

        new Popper(
            marker,
            popper,
            {
                placement: 'top',
                modifiers: {
                    offset: {
                        fn: (data)=>{
                            if(data.placement === 'top'){
                                data.offsets.popper.top -= 10;
                            } else if(data.placement === 'bottom'){
                                data.offsets.popper.top += 10;
                            }

                            return data
                        }
                    },
                    flip: {
                        behavior: ['bottom', 'top'],
                    },
                    preventOverflow: {
                        boundariesElement: map,
                    },
                },
            }
        );

        marker.onclick = togglePopover
        closeButton.onclick = togglePopover
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

        // Calculate width/height based on current map size
        // center the icon to the location (/2)
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

            this.updateMarkers(map, [...markers])
            window.onresize = ((map, markers) => () => this.updateMarkers(map, [...markers]))(map, markers)
        });

        return this;
    }

    return this.init();
}

export default CustomMap;
