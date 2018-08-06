<div class="component found-categories-details show-scroll-left fade-me-in" data-component-name="ScrollIndicator">
    <div class="scroll-indicator"></div>

    <?php
    $categories = $globalColumn['found_categories'];

    foreach ($categories as $key=>$category) {
        $title = $category['title'];
        $body = $category['text_body'];
        $cityImage = $category['city_image'];
        $customLogo = $category['custom_logo'];
        $learnMoreLink = $category['learn_more_link'];
        $locationsLists = $category['locations_lists'];
        $backgroundColor = $category['background_color'];
        $scrollIndicatorColor = $category['scroll_indicator_color'];
        ?>

        <div class="grid pure-g category-detail"
             style="background-color: <?= $backgroundColor ?>"
             data-scroll-color="<?= $scrollIndicatorColor; ?>">
            <div class="pure-u-lg-6-12 image-side">
                <div class="title-wrapper">
                    <p class="number">0<?= $key + 1; ?></p>
                    <p class="headline2 title"><?= $title; ?></p>
                </div>

                <div class="image-wrapper">
                    <img src="<?= $cityImage; ?>" alt="category city">
                </div>
            </div>

            <div class="pure-u-lg-6-12 content-side">
                <div class="number">
                    0<?= $key + 1; ?>
                </div>

                <div class="custom-logo">
                    <img src="<?= $customLogo; ?>" alt="category logo">
                </div>

                <div class="body paragraph">
                    <?= $body; ?>
                </div>

                <div class="locations-lists fade-me-in pure-g">

                    <?php
                    foreach ($locationsLists as $list) {
                        $listTitle = $list['list_title'];
                        $locationItems = $list['locations'];
                        ?>

                        <div class="pure-u-sm-12-12 pure-u-lg-4-12 locations-list-wrapper">
                            <h4 class="headline4 title"><?= $listTitle; ?></h4>
                            <ul class="locations-list">
                                <?php
                                foreach ($locationItems as $location) {
                                    $locationName = $location['location_name'];
                                    ?>
                                    <li class="headline4"><?= $locationName; ?></li>
                                <?php } ?>

                            </ul>
                        </div>
                    <?php } ?>
                </div>
                <div class="link-wrapper">
                    <a
                            href="<?= $learnMoreLink['url']; ?>"
                            class="found-underline-link desert">
                        <?= $learnMoreLink['title']; ?>
                    </a>
                </div>
            </div>
        </div>

    <?php } ?>
</div>