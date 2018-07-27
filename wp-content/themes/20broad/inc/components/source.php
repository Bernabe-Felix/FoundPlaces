<!-- Source component -->
<?php
	$source = $globalColumn['source'];
	$shortcode = $globalColumn['shortcode'];
?>
<section class="component-source">
	<div class="content-wrapper">
		<?php 
			if($source) {
				echo $source;
			}

			if($shortcode) {
				echo $shortcode;
			}
		?>
	</div>
</section>