<div class="component" id="locations">
    <p class="headline2 locations-body">
        <?= $globalColumn['text_body'] ?>
    </p>

    <ul class="locations-list">
        <?php
            foreach ($globalColumn['locations_list'] as $list){
        ?>

        <li class="locations-list-item">
            <img class="item-icon" src="<?= $list['icon'] ?>" alt="bear icon">
            <div class="text headline3">
                <span class="title"><?= $list['location_title'] ?></span>
                <span class="total-locations"><?= $list['location_subheader'] ?></span>
            </div>
        </li>
        <?php } ?>
    </ul>
</div>