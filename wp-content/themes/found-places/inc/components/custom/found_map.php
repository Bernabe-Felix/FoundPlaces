<div class="component component-custom-map" data-component-name="CustomMap">
    <?php

//        $mapImage = $globalColumn['map_image'];
        $mapImage = 'http://found.test/wp-content/uploads/2018/08/map_placeholder.svg';
//        $mapText = $globalColumn['map_text'];
        $mapText = 'FOUND Locations';
//        $mapTextColor = $globalColumn['map_text_color'];
        $mapTextColor = '#B36A20';
        $markers = $globalColumn['map_markers'];
        $markerType = $markers[0]['marker_type'];
        $markerX = 'marker_x';
        $markerY = 'marker_y';
        $markerTitle = 'marker_title';
        $markerAddress = 'marker_address';
        $markerPhone = 'marker_phone';
    ?>
    <h2 class="headline2 map-text" style="color: <?= $mapTextColor; ?>"><?= $mapText; ?> </h2>

    <div class="image-wrapper">
        <img
                class="map-wrapper"
                src="<?= $mapImage; ?>" >

        <button
                class="map-marker"
                data-type="hotel"
                data-x="100"
                data-y="150">

        </button>
        <?php
            $title = "Chicago";
            $body = "613 N Wells St, Chicago, IL 60654";
            $phone = "(224) 243-6863";
        ?>
        <div class="marker-popup">
            <span class="popup-close">×</span>
            <p class="marker-title"><?= $title; ?></p>
            <p class="marker-body"><?= $body; ?></p>
            <p class="marker-phone"><?= $phone; ?></p>
        </div>
        <button
                class="map-marker"
                data-type="residence"
                data-x="120"
                data-y="170"></button>
        <button
                class="map-marker"
                data-type="study"
                data-x="140"
                data-y="190"></button>
    </div>
</div>