<?php
/**
 * Template: Blog landing page
 * Description: Wordpress template for all blog posts
 *
 */
    get_header();

    $term = get_queried_object();
    $taxonomy = '';
    $postsPage = get_option( 'page_for_posts' );
    $blogTitle = get_the_title($postsPage);
    $blogDescription = get_post($postsPage)->post_content;
    //if is password protected, show the password field
    if ( post_password_required() ) {
        echo get_the_password_form(); 
    } else {

        // check if the flexible content field has rows of data
        if( have_rows('layout', $term) ): //page.php === Flexible Layout in backend.

            // loop through the rows of data
            while ( have_rows('layout', $term) ) : the_row();

                include(get_template_directory() . "/inc/config/layout-generator.php"); 
                
            endwhile; // layout loop

            else:
            //Default Archive Template, Anything that doesnt have a set template defaults to here.

					if (have_posts() ) : 


    ?>

                    <section class="component-row component-theme-lt-gray row-text-white small-hero" style=" background-image:url(/wp-content/themes/isoc/dist/images/BLUE-NODE-DARK.png); background-repeat:no-repeat; background-size:cover; background-position:center center;">
                        <div class="component-row-inner pure-g component-alignment-center component-row-standard">
                            <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                                <div class="content-wrapper">
                                    <h1 class="headline1 page-header align-center"><?= $blogTitle;?></h1>
                                    <div class="body-text">
                                        <p class="align-center"><?= $blogDescription; ?> </p>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </section>
                    <section class="component-row component-theme-lt-gray row-text-white padding-top" data-logo-color="row-text-white" style="">
                        <div class="component-row-inner pure-g component-row-standard component-alignment-top">
                            <!-- offset div - if is none, the div will be hidden per screensize -->
                            <div class="column desktop-hidden tablet-hidden mobile-hidden component-theme-default"></div>
                            <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                                <?php
                                    $template = locate_template('/inc/components/custom/03_feed-filter.php');
                                    if( file_exists($template) ): include($template); else: echo 'Cannot find template: ' . $template; endif;
                                ?>          
                            </div>
                        </div>
                    </section>
            
                    <section class="component-row component-theme-lt-gray padding-bottom row-text-black">
                        <div class="component-row-inner pure-g component-alignment-top component-row-standard">
                            <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                                <div class="content-wrapper">
                                    <?php
                                        $template = locate_template('/inc/components/feed.php');
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