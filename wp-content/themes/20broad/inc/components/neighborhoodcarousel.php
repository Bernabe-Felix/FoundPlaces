<?php
	/**
	 * QB Twenty Broad Neighborhood Carousel component
	 */
	$slides = $globalColumn['neighborhood_carousel_slides'];
?>
<section class="component component-neighborhood-carousel" data-component-name="QBTwentyBroadNeighborhoodCarousel">
	<div class="content-wrapper">
		<!-- <?php /* print_r($slides); */ ?> -->
		<?php
			$i = 0;

			if ($slides) :
				// Show next/prev if more than one slide
				if (count($slides) > 1) :
					?>
					<a href="#prev" class="nav prev showOnDesktop"><?php
						echo Utils::render_template("inc/templates/svg.php", array(
							"id" => "icon-page-left",
							"classes" => "icon-page-left"
						)); 
					?></a>
					<a href="#next" class="nav next showOnDesktop"><?php
						echo Utils::render_template("inc/templates/svg.php", array(
							"id" => "icon-page-right",
							"classes" => "icon-page-right"
						)); 
					?></a>
					<ul class="dots-component">
						<?php
							// One dot for each slide, clickable
							$n = 0;
							foreach ($slides as $slide) {
								echo '<li class="dot"><a href="#' . $i . '"></a></li>';
								$n++;
							}
						?>
					</ul>
					<?php
				endif;
				?>
				<ul class="slides">
				<?php
					foreach ($slides as $slide) {
						$slideImage = $slide['neighborhood_carousel_slide_background_image'];
						$headline = $slide['neighborhood_carousel_slide_headline'];
						$subhead = $slide['neighborhood_carousel_slide_subhead'];
						$ctaCaption = $slide['neighborhood_carousel_slide_cta_caption'];
						$ctaCaptionURL = $slide['neighborhood_carousel_slide_cta_caption_url'];
						?>
							<li class="slide" data-background-image-source="<?= $slideImage['url']; ?>">
								<hgroup>
									<?php if ($headline) : ?><h2 class="headline2"><?php echo $headline; ?></h2><?php endif; ?>
									<?php if ($subhead) : ?><h3 class="headline3"><?php echo $subhead; ?></h3><?php endif; ?>
									<?php if ($ctaCaption) : ?><p><a href="<?php echo $ctaCaptionURL; ?>" class="headline3 gold-text"><?php echo $ctaCaption; ?></a></p><?php endif; ?>
								</hgroup>
							</li>
						<?php
					}
				?>
				</ul>
				<?php
			endif;
		?>
	</div>
	<div class="slide-background-container"></div>
</section>
