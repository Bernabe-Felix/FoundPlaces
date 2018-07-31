<?php
/**
 * Template: Search results
 *
 */
    get_header();

    $taxonomy = get_queried_object();

    //if is password protected, show the password field
    if ( post_password_required() ) {
        echo get_the_password_form(); 
    } else {
?>
    <section data-logo-color="row-text-white" class="component-row component-theme-lt-gray  padding-top padding-bottom-small row-text-black">
        <div class="component-row-inner pure-g component-row-standard bottom-border padding-bottom-small component-alignment-center ">
            <!-- offset div - if is none, the div will be hidden per screensize -->
            <div class="column pure-u-lg-2-8 tablet-hidden mobile-hidden component-theme-default">
                    <div class="component-share component" data-component-name="Back">
                        <span class="back-link blue-text">&lsaquo; <?php _e( 'Back', '_isoc' );?></span>
                    </div>
            </div>
            <div class="column  pure-u-lg-4-8 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default component-alignment-center">
                <?php 
                    echo Utils::render_template("inc/templates/search-form.php", array(
                        "term" => '',
                        "taxonomy" => '',
                        "searchQuery" => $GLOBALS['query'],
                        "searchPlaceholder" => $GLOBALS['searchPlaceholder']
                    ));
                ?>                 
            </div>
        </div>
    </section>  
    <?php
        // query_posts($query);

        if (have_posts()) : 
    ?>
     
                    <section class="component-row component-theme-lt-gray padding-bottom row-text-black">
                        <div class="component-row-inner pure-g component-alignment-top component-row-standard">                       
                            <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                                <div class="content-wrapper">
                                    <!-- Feed component -->
                                    <?php
                                        $template = locate_template('/inc/components/custom/02_feed-filter-search.php');
                                        if( file_exists($template) ): include($template); else: echo 'Cannot find template: ' . $template; endif;

                                        $template = locate_template('/inc/components/feed-category.php');
                                        if( file_exists($template) ): include($template); else: echo 'Cannot find template: ' . $template; endif;
                                    ?>
                                </div>  
                            </div>
                        </div>
                    </section>        
                    <?php
                        $template = locate_template('/inc/components/custom/05_join-cta.php');
                        if( file_exists($template) ): include($template); else: echo 'Cannot find template: ' . $template; endif;
                    ?>
        

    <?php   
            
                else: 
    ?>
                    <section class="component-row component-theme-lt-gray padding-bottom row-text-black medium-hero">
                        <div class="component-row-inner pure-g component-alignment-top component-row-standard">                       
                            <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                                <div class="content-wrapper">
                                    <div class="body-text">
                                        <p class="align-center"><?php _e( 'Your search returned no results.', '_isoc' );?></p>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </section>        
                    <?php
                        $template = locate_template('/inc/components/custom/05_join-cta.php');
                        if( file_exists($template) ): include($template); else: echo 'Cannot find template: ' . $template; endif;
                    ?>
    <?php
                endif; // endif default loop
                 wp_reset_query();
    } // password if statement
get_footer();
?>