<header class="main-header component" data-component-name="Nav">
    <div class="hamburger-container">
        <img class="menu-icon" src="<?php bloginfo('template_directory')?>/src/images/hamburguer.svg" alt="">
    </div>

    <div class="close-container">
        <img class="menu-icon" src="<?php bloginfo('template_directory')?>/src/images/close_icon.svg" alt="">
    </div>

    <div class="mobile-menu">
        <img class="custom_logo" src="<?= the_field('nav_mobile_image', 'options') ?>" alt="">

        <?php
        if (has_nav_menu('primary')) {
            wp_nav_menu( array( 'theme_location' => 'primary' ) );
        }
        ?>
    </div>

    <div class="desktop-menu">
        <?php
        if (has_nav_menu('primary')) {
            wp_nav_menu( array( 'theme_location' => 'primary' ) );
        }
        ?>
    </div>
</header>
