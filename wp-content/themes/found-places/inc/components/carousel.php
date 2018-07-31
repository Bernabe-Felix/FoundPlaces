<?php
	/**
	 * QB Twenty Broad Carousel component
	 */
	$slides = $globalColumn['carousel_slides'];
	$carousel_alignment = $globalColumn['carousel_alignment'];
	$carousel_color = $globalColumn['carousel_color']
?>
<section class="component component-carousel <?php echo 'align-' . $carousel_alignment ?> <?php echo 'color-' . $carousel_color ?>" data-component-name="QBTwentyBroadCarousel">
	<div class="content-wrapper">
		<!-- <?php /* print_r($slides); */ ?> -->
		<?php
			$i = 0;

			if ($slides) :
				?>
				<ul class="slides">
				<?php
					foreach ($slides as $slide) {
						$headline = $slide['carousel_slide_headline'];
						$copy = $slide['carousel_slide_copy'];
						$slideImage = $slide['carousel_slide_background_image'];
						?>
							<li class="slide" data-background-image-source="<?= $slideImage['url']; ?>">
								<hgroup>
									<?php if ($headline) : ?><h2 class="headline1"><?php echo $headline; ?></h2><?php endif; ?>
									<?php if ($copy) { echo $copy; } ?>
								</hgroup>
							</li>
						<?php
					}
				?>
				</ul>
				<?php
				// Show next/prev if more than one slide
				if (count($slides) > 1) :
					?>
					<ul class="dots-component">
						<ul class="arrow-nav">
							<li><a href="#prev" class="nav prev showOnDesktop"><?php
								echo Utils::render_template("inc/templates/svg.php", array(
									"id" => "icon-page-left",
									"classes" => "icon-page-left"
								));
							?></a></li>
							<li><a href="#next" class="nav next showOnDesktop"><?php
								echo Utils::render_template("inc/templates/svg.php", array(
									"id" => "icon-page-right",
									"classes" => "icon-page-right"
								)); 
							?></a></li>
						</ul>
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
			endif;
		?>
	</div>
	<div class="slide-background-container"></div>
</section>
