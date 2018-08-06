<div class="component component-custom-map" data-component-name="CustomMap">
    <?php

        $mapImage = $globalColumn['map_image'];
        $mapText = $globalColumn['map_text'];
        $mapTextColor = $globalColumn['map_text_color'];
        $markers = $globalColumn['map_markers'];

        $hotelIcon = $globalColumn['hotel_icon'];
        $residenceIcon = $globalColumn['residence_icon'];
        $studyIcon = $globalColumn['study_icon'];
    ?>
    <h2 class="headline2 map-text" style="color: <?= $mapTextColor; ?>"><?= $mapText; ?> </h2>

    <div class="map-image-wrapper">
        <img
                class="map-wrapper"
                src="<?= $mapImage; ?>" >

        <div class="marker-wrapper">
            <?php
            foreach ($markers as $key=>$marker){
                $markerType = $marker['marker_type'];
                $markerX = $marker['marker_x'];
                $markerY = $marker['marker_y'];
                $markerTitle = $marker['marker_title'];
                $markerAddress = $marker['marker_address'];
                $markerPhone = $marker['marker_phone'];

                $markerIcon = '';

                switch ($markerType){
                    case 'hotel':
                        $markerIcon = $hotelIcon;
                        break;
                    case 'residence':
                        $markerIcon = $residenceIcon;
                        break;
                    case 'study':
                        $markerIcon = $studyIcon;
                }

                ?>
                <button
                        class="map-marker"
                        style="background-image: url('<?= $markerIcon; ?>')"
                        data-x="<?= $markerX; ?>"
                        data-y="<?= $markerY; ?>">

                </button>

                <div class="marker-popup">
                    <span class="popup-close">×</span>
                    <p class="marker-title"><?= $markerTitle; ?></p>
                    <p class="marker-body"><?= $markerAddress; ?></p>
                    <p class="marker-phone"><?= $markerPhone; ?></p>
                </div>

            <?php } ?>
        </div>
    </div>
</div>