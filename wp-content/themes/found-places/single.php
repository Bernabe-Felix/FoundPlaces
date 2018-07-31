<?php
/**
 * Template: News Post Single
 * Description: Wordpress template for a single post
 *
 */
    get_header();

        if (have_posts()) : while (have_posts()) : the_post();

?>
   

        <section class="component-row component-theme-default padding-top-small row-text-black">
            <div class="component-row-inner pure-g component-alignment-top component-row-standard">
                <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                    <?php echo Utils::render_template("inc/templates/single-templates/single-header.php");?>
                </div>
            </div>
        </section>
        <section class="component-row component-theme-default padding-bottom-small row-text-black">
            <div class="component-row-inner pure-g component-alignment-top">
                <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                    <?php echo Utils::render_template("inc/templates/single-templates/single-hero.php");?>
                </div>
            </div>
        </section>

        <!-- story layout -->
        <?php
            $storyLayouts = get_field('story_layout');
            foreach ($storyLayouts as $storyLayout) {
        ?>
            <section class="component-row component-theme-default padding-top-small padding-bottom-small row-text-black">
                <div class="component-row-inner pure-g component-alignment-top component-row-standard">
                    <?php 
                        if($storyLayout['acf_fc_layout'] == "story_text") { 
                            echo '<div class="column pure-u-lg-2-12 pure-u-md-1-12 mobile-hidden component-theme-default"></div>';
                            echo '<div class="column pure-u-lg-8-12 pure-u-md-10-12 pure-u-sm-1-1 component-theme-default">';
                            echo Utils::render_template("inc/templates/single-templates/single-body-text.php", array(
                                "bodyCopy" => $storyLayout['body_copy']
                            ));
                            echo '</div>';
                        } 

                        if($storyLayout['acf_fc_layout'] == "quote") { 
                            if($storyLayout['quote_image']) {
                                $quoteClass = ' pure-u-lg-7-12 pure-u-md-9-12 ';
                            } else {
                                $quoteClass = ' pure-u-lg-6-12 pure-u-md-8-12 ';
                            }
                            echo '<div class="column pure-u-lg-3-12 pure-u-md-2-12 mobile-hidden component-theme-default"></div>';
                            echo '<div class="column'.$quoteClass.'pure-u-sm-1-1 component-theme-default">';
                            echo Utils::render_template("inc/templates/single-templates/single-quote.php", array(
                                "quoteText" => $storyLayout['quote_text'],
                                "quoteSource" => $storyLayout['quote_source'],
                                "quoteTitle" => $storyLayout['quote_title'],
                                "quoteImage" => $storyLayout['quote_image'],
                            ));
                            echo '</div>';
                        }

                        if($storyLayout['acf_fc_layout'] == "images") { 
                            echo '<div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">';
                            echo Utils::render_template("inc/templates/single-templates/single-images.php", array(
                                "imageLayout" => $storyLayout['image_layout_type'],
                                "images" => $storyLayout['images']
                            ));
                            echo '</div>';
                        }

                    ?>
                </div>
            </section>
        <?php } ?>
        <section class="component-row component-theme-default row-text-black">
            <div class="component-row-inner pure-g component-alignment-top component-row-standard">
                <div class="column pure-u-lg-2-12 pure-u-md-2-12 mobile-hidden component-theme-default"></div>
                <div class="column pure-u-lg-8-12 pure-u-md-8-12 pure-u-sm-1-1 component-theme-default">
                    <?php 
                        echo Utils::render_template("inc/templates/single-templates/single-footer.php", array(
                            "postID" => $post->ID
                        ));
                    ?>
                </div>
            </div>
        </section>
        <section class="component-row component-theme-default padding-bottom row-text-black">
            <div class="component-row-inner pure-g component-alignment-top">
                <div class="column pure-u-lg-2-12 pure-u-md-2-12 mobile-hidden component-theme-default"></div>
                <div class="column pure-u-lg-8-12 pure-u-md-8-12 pure-u-sm-1-1 component-theme-default">
                    <?php 
                        echo Utils::render_template("inc/templates/single-templates/single-center-cta.php", array(
                            "postID" => $post->ID
                        ));
                    ?>
                </div>
            </div>
        </section>
<?php


        endwhile; // endwhile default loop
        else:
?>
        <p>Sorry, no pages matched your criteria.</p>
<?php
        endif; // endif default loop
get_footer();
?>
