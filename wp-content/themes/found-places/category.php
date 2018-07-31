<?php
/**
 * Template: All Stories Archive
 *
 */
    get_header();

    //get org levels
    $orgLevels = get_terms( 'org_level', 
        array(
            'hide_empty' => true,
        ) 
    );

?>
    <section class="component-row component-theme-default padding-top row-text-black" data-logo-color="row-text-black" style="">
        <div class="component-row-inner pure-g component-row-standard component-alignment-top">
            <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                <div class="component-archive-header">
                    <header>
                        <a href="/about" class="uppercase sans-serif14 align-left"><strong>About</strong></a>
                        
                    </header>
                </div>
            </div>
        </div>
    </section>

    <section class="component-row component-theme-default padding-top padding-bottom row-text-black" data-logo-color="row-text-black" style="">
        <div class="component-row-inner pure-g component-row-standard component-alignment-top">
            <div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default">
                <?php echo Utils::render_template("inc/templates/archive-feed.php");?>
            </div>
        </div>
    </section>

<?php
    get_footer();
?>