<?php
/**
 * Template: Tag Flexible Layout
 * Description: Wordpress template for a category archive
 *
 */
    get_header();

    $searchPlaceholder = '';
    $query = '';
    $term = get_queried_object();
    $taxonomy = get_queried_object();

    //update the main query to include all post types
    $postType = 'any';
    $args = array(
        'post_type' => $postType,
        'post_status' => 'publish',
        'tag__in' => $term->term_id
    );
    query_posts($args);

    //if is password protected, show the password field
    if ( post_password_required() ) {
        echo get_the_password_form(); 
    } else {
        // make the layout row global so that it can be accessed in components
        $globalRows = get_field('layout', $term);
        $rowNumber = 0;
        
        // check if the flexible content field has rows of data
        if( have_rows('layout', $term) ): //page.php === Flexible Layout in backend.

            // loop through the rows of data
            while ( have_rows('layout', $term) ) : the_row();

                include(get_template_directory() . "/inc/config/layout-generator.php"); 
                
            endwhile; // layout loop

            else:
            //Default Archive Template, Anything that doesnt have a set template defaults to here.
                if (have_posts()) : 

                    // get the english category ID to use the same background image across languages.
                    $current_language = $sitepress->get_current_language();
                    $default_language = $sitepress->get_default_language();
                    $sitepress->switch_lang($default_language);
                    
                    $englishCategory = apply_filters( 'wpml_object_id', $term->term_id, 'category', TRUE, 'en');
                    $englishCatID = get_term_by ('term_taxonomy_id', $englishCategory, 'category')->term_id;
                    $categoryID = 'category_'.$englishCatID;
                    
                    $sitepress->switch_lang($current_language);


                    $catThumbnail = get_field('category_image', $categoryID)['url'];
                    if($catThumbnail) {
                        $catThumbnail = $catThumbnail;
                    } else {
                        $catThumbnail = '/wp-content/themes/isoc/dist/images/BLUE-NODE-DARK.png';
                    }

                    $catBackgroundGradient = get_field('category_background_gradient', $categoryID);


                    $positionHoriz = get_field('background_image_position_horizontal', $categoryID);
                    $positionVert = get_field('background_image_position_vertical', $categoryID);

                    if(!$positionHoriz) {
                        $positionHoriz = 'center';
                    }

                    if(!$positionVert) {
                        $positionVert = 'center';
                    }
    ?>

                    <section class="component-row component-theme-lt-gray row-text-white small-hero" style=" background-image:url('<?= $catThumbnail;?>'); background-repeat:no-repeat; background-size:cover; background-position:<?= $positionHoriz.' '.$positionVert;?>">
                        <?php if($catBackgroundGradient) {?>
                            <div class="background-gradient"></div>
                        <?php } ?>
                        <div class="component-row-inner pure-g component-alignment-center component-row-standard">
                            <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                                <div class="content-wrapper">
                                    <h1 class="headline1 page-header align-center"><?php single_cat_title(); ?></h1>
                                    <div class="body-text">
                                        <p class="align-center"><?= strip_tags(category_description()); ?> </p>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </section>
                    <section class="component-row component-theme-lt-gray padding-top-small padding-bottom-small row-text-black">
                        <div class="component-row-inner pure-g component-alignment-top component-row-standard bottom-border padding-bottom-small">
                            <div class="column pure-u-lg-3-12 tablet-hidden mobile-hidden component-theme-default "></div>
                            <div class="column pure-u-lg-6-12 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                                <div class="content-wrapper">
                                    <?php echo Utils::render_template("inc/templates/search-form.php", array(
                                        "term" => $term,
                                        "taxonomy" => '',
                                        "searchQuery" => $query,
                                        "searchPlaceholder" => $searchPlaceholder

                                    ));?>
                                </div> 
                            </div>
                        </div>
                    </section>              
                    <section class="component-row component-theme-lt-gray padding-bottom row-text-black">
                        <div class="component-row-inner pure-g component-alignment-top component-row-standard">
                            <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                                <div class="content-wrapper">
                                    <?php
                                        $template = locate_template('/inc/components/feed-category.php');
                                        if( file_exists($template) ): include($template); else: echo 'Cannot find template: ' . $template; endif;
                                    ?>
                                </div>  
                            </div>
                        </div>
                    </section>        

        

    <?php   
            
                else: 
                
                    echo Utils::render_template("inc/templates/category-fallback.php"); 

                endif; // endif default loop
                 wp_reset_query();
            endif; //endif main loop
    } // password if statement
get_footer();
?>