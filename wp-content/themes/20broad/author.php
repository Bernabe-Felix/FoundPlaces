<?php
/**
 * Template: Author Bio Page
 *
 */
    get_header();

        $curauth = $wp_query->get_queried_object();


?>
        
        <!-- post hero -->
        <section class="component-row component-theme-black row-text-white component component-author-hero">
            <div class="component-row-inner component-row-standard pure-g component-alignment-center">
                <div class="column pure-u-lg-2-12 tablet-hidden mobile-hidden component-theme-default ">

                </div>
                <div class="column pure-u-lg-8-12 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default ">
                    <div class="content-wrapper">
                        <header class="author-header">
                            <?php 
                                $authorID = $curauth->ID; 
                                $authorACFid = 'user_'.$authorID;
                                $authorPhoto = get_field('author_photo', $authorACFid);
                                $authorBio = get_field('author_bio', $authorACFid);
                            ?>
                            <div class="author-photo"><img src="<?= $authorPhoto['url'];?>" title="<?php the_author(); ?>" alt="<?php the_author(); ?>" /></div>
                            <div class="author-meta">
                                <h1 class="headline1"><?php the_author(); ?></h1>
                                <h2 class="headline2"><?= get_field('author_title', $authorACFid);?></h2>
                            </div>
                        </header>                        
                    </div>
                </div>
            </div>
        </section>

        <section class="component-row padding-bottom component component-author-bio">
			<div class="component-row-inner pure-g component-alignment-top component-row-standard row-reverse-mobile">
				<div class="column pure-u-lg-2-12 tablet-hidden mobile-hidden component-theme-default ">
                    <div class="component-share component" data-component-name="Back">
                        <span class="back-link blue-text">&lsaquo; <?php _e( 'Back', '_isoc' );?></span>  
                    </div>                 
                </div>
				<div class="column pure-u-lg-6-12 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default ">
					<div class="content-wrapper">
                        <article>
                            <h5 class="headline5"><?php _e( 'Biography', '_isoc' );?></h5>
                            <div class="body-text">
                                <p><?= $authorBio;?></p>
                            </div>
                            
                        </article>
	            	</div>
	            </div>
                <div class="column pure-u-lg-1-12 tablet-hidden mobile-hidden component-theme-default ">
                </div>
                <div class="column pure-u-lg-3-12 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default ">
                        <?php if(get_field('twitter_url', $authorACFid) || get_field('facebook_url', $authorACFid) || get_field('instagram_url', $authorACFid) || get_field('linkedin_url', $authorACFid) || get_field('github_url', $authorACFid) || get_field('medium_url', $authorACFid)) { ?>
                            <div class="component component-follow">
                                <h5 class="headline5 align-center"><?php _e( 'Connect with', '_isoc' );?><br /><?php the_author(); ?></h5>
                                <?php if(get_field('twitter_url', $authorACFid)) { ?>
                                    <a class="share-icon" href="<?= get_field('twitter_url', $authorACFid);?>" target="_blank"><i class="fa fa-twitter" title="<?php the_author(); ?> <?php _e('on Twitter', '_isoc');?>"></i></a>
                                <?php } ?>
                                <?php if(get_field('facebook_url', $authorACFid)) { ?>
                                    <a class="share-icon" href="<?= get_field('facebook_url', $authorACFid);?>" target="_blank"><i class="fa fa-facebook" title="<?php the_author(); ?> <?php _e('on Facebook', '_isoc');?>"></i></a>
                                <?php } ?>
                                <?php if(get_field('instagram_url', $authorACFid)) { ?>
                                    <a class="share-icon" href="<?= get_field('instagram_url', $authorACFid);?>" target="_blank"><i class="fa fa-instagram" title="<?php the_author(); ?> <?php _e('on Instagram', '_isoc');?>"></i></a>
                                <?php } ?>
                                <?php if(get_field('linkedin_url', $authorACFid)) { ?>
                                    <a class="share-icon" href="<?= get_field('linkedin_url', $authorACFid);?>" target="_blank"><i class="fa fa-linkedin" title="<?php the_author(); ?> <?php _e('on LinkedIn', '_isoc');?>"></i></a>
                                <?php } ?>
                                <?php if(get_field('github_url', $authorACFid)) { ?>
                                    <a class="share-icon" href="<?= get_field('github_url', $authorACFid);?>" target="_blank"><i class="fa fa-github" title="<?php the_author(); ?> <?php _e('on Github', '_isoc');?>"></i></a>
                                <?php } ?>
                                <?php if(get_field('medium_url', $authorACFid)) { ?>
                                    <a class="share-icon" href="<?= get_field('medium_url', $authorACFid);?>" target="_blank"><i class="fa fa-medium" title="<?php the_author(); ?> <?php _e('on Medium', '_isoc');?>"></i></a>
                                <?php } ?>
                            </div>
                        <?php } ?>
                </div>
	        </div>

	    </section>
        <?php 

            echo Utils::render_template("inc/templates/author-latest-posts.php", 
                array(
                    "authorID" => $authorID,
                )
            ); 
        ?>
        <?php 

            echo Utils::render_template("inc/templates/author-latest-news.php", 
                array(
                    "authorID" => $authorID,
                )
            ); 
        ?>
        <?php
            $template = locate_template('/inc/components/custom/05_join-cta.php');
            if( file_exists($template) ): include($template); else: echo 'Cannot find template: ' . $template; endif;
        ?>

<?php


get_footer();
?>
