<div class="cities-banner">
    <?php
        foreach ($globalColumn['residences_cities_banner'] as $city){
    ?>
    <div class="banner-item">
        <h2 class="text-headline"><?= $city['location_name']; ?></h2>
        <h3 class="text-subhead"><?= $city['city_name']; ?></h3>
    </div>
    <?php } ?>
</div>