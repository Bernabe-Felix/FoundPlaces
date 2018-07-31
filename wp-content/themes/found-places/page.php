<?php
/**
 * Template Name: Flexible Layout
 * Template Post Type: page, events
 * Description: Wordpress template for a single page
 */
	get_header();

	$ID = $post->ID;
	$taxonomy = '';
	$term = '';

	// Body level background image
	$bodyBackground = get_field('background_image');

	if ($bodyBackground) {
		echo '<style>body { background-image: url("' . $bodyBackground['url'] . '") }   </style>';
	}

	// If is password protected, show the password field
	if (post_password_required()) {
		echo get_the_password_form(); 
	} else {
		// Make the layout row global so that it can be accessed in components
		$globalRows = get_field('layout');
		$rowNumber = 0;

		// Check if the flexible content field has rows of data
		// page.php === Flexible Layout in backend.
		if (get_post_meta(get_the_id(), '_wp_page_template')[0] === 'page.php' && $globalRows ) : 
			// Loop through the rows of data
			foreach ($globalRows as $globalRow) {
				// echo '$globalRow: ';
				// print_r($globalRow);
				// echo ' --- ';
				// code...
				include(get_template_directory() . "/inc/config/layout-generator.php"); 
				$rowNumber++;
			}
		else:
			// Default Page Template, Anything that doesnt have a set template defaults to here. 
			// Should be a plain page for text.
			if (have_posts()) : 
				while (have_posts()) : 
					the_post();
						if (has_post_thumbnail()) :
							?>
								<section class="component-row component-theme-black component component-single-hero">
									<div class="component-row-inner pure-g component-alignment-top">
										<div class="column pure-u-lg-1-1 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default ">
											<div class="content-wrapper">
												<div class="hero-image-wrapper responsive-wrapper">
													<?php the_post_thumbnail('full', array('title' => get_the_title().' Thumbnail', 'alt' => get_the_title().' Thumbnail')) ;?>
												</div>
											</div>
										</div>
									</div>
								</section>
							<?php
						endif;
						?>
						<section class="component-row padding-bottom padding-top component component-single">
							<div class="component-row-inner pure-g component-alignment-top component-row-standard">
								<div class="column pure-u-lg-2-12 tablet-hidden mobile-hidden component-theme-default ">
									<?php echo Utils::render_template("inc/templates/share.php", array()); ?>
								</div>
								<div class="column pure-u-lg-6-12 pure-u-md-1-1 pure-u-sm-1-1 component-theme-default ">
										<div class="content-wrapper">
											<h1 class="headline2 align-left"><?php the_title();?></h1>
											<div class="body-text">
												<?php the_content(); ?>
											</div>
										</div>  
										<div class="desktop-hidden">
											<?php echo Utils::render_template("inc/templates/share.php", array()); ?>
										</div>
									</div>
								</div>
								<div class="column pure-u-lg-1-12 tablet-hidden mobile-hidden component-theme-default ">
								</div>
								<div class="column pure-u-lg-3-12 pure-u-md-12-12 pure-u-sm-1-1 component-theme-default ">
									<!-- potentially add sidebar in future -->
								</div>
							</div>
						</section>
					<?php
				endwhile;
			else:
				?>
				<p>Sorry, no pages matched your criteria.</p>
				<?php
			endif;
		endif;
	}
get_footer();
?>