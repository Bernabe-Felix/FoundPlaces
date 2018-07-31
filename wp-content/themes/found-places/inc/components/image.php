<!-- Image component -->
<?php
	$image = $globalColumn['image'];
	$imageLink = $globalColumn['image_link'];
	$imageLinkExternal = $globalColumn['image_link_external'];
	$showCTA = $globalColumn['show_cta'];
	$ctaColor = $globalColumn['cta_color'];
	$ctaText = $globalColumn['cta_text'];
	$internalCTA = $globalColumn['internal_link_cta'];
	$externalCTA = $globalColumn['external_link_cta'];
	$ctaLink = '';
	if($showCTA == 'internal') {
		$ctaLink = $internalCTA;
	} else {
		$ctaLink = $externalCTA;
	}

	$showCTA2 = $globalColumn['show_cta_2'];
	$ctaColor2 = $globalColumn['cta_color_2'];
	$ctaText2 = $globalColumn['cta_text_2'];
	$internalCTA2 = $globalColumn['internal_link_cta_2'];
	$externalCTA2 = $globalColumn['external_link_cta_2'];
	$ctaLink2 = '';
	if($showCTA2 == 'internal') {
		$ctaLink2 = $internalCTA2;
	} else {
		$ctaLink2 = $externalCTA2;
	}

	if($imageLink) {
		$imageLink = $imageLink;
	} else if($imageLinkExternal) {
		$imageLink = $imageLinkExternal;
	} else {
		$imageLink = '';
	}
?>
<section class="component-image">
	<div class="content-wrapper">
	<?php if($imageLink){?><a href="<?= $imageLink;?>"<?php if($imageLinkExternal){ echo ' target="_blank"';}?>><?php } ?><img src="<?= $image['url'];?>" alt="<?= $image['title'];?>" title="<?= $image['title'];?>" /><?php if($imageLink){?></a><?php } ?>
	<div class="image-overlay align-center">
		<div class="image-info">
						<?php if ($showCTA != 'none' || $showCTA2 != 'none'): ?>
			<div class="ctas align-center">
				<?php if($showCTA != 'none') { ?>
					<a href="<?= $ctaLink;?>" class="button button-<?= $ctaColor;?>"<?php if($showCTA == 'external'){echo ' target="_blank"';}?>><?= $ctaText;?></a>
				<?php } ?>
				<?php if($showCTA2 != 'none') { ?>
					<a href="<?= $ctaLink2;?>" class="button button-<?= $ctaColor2;?>"<?php if($showCTA2 == 'external'){echo ' target="_blank"';}?>><?= $ctaText2;?></a>
				<?php } ?>
			</div>
						<?php endif ?>

		</div>
	</div>

	</div>
</section>
