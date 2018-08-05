<div class="component component-custom-map" data-component-name="CustomMap">
    <div class="image-wrapper">
        <img
                class="map-wrapper"
                src="http://found.test/wp-content/uploads/2018/08/map_placeholder.svg"
                data-original-width="843"
                data-original-height="536">
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