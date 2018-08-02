<section class="component component-gallery" data-component-name="Gallery">
	<?php
		$galleryItems = $globalColumn['gallery_items'];
		$galleryCount = count($galleryItems);
		$width = ($galleryCount*210) - 20;
	?>
	<div class="gallery-main-image">
		<img src="<?= $galleryItems[0]['url'];?>" />
		<div class="component-row-standard">
			<div class="photo-count openSlideshow">
				<i class="fa fa-camera"></i><span class="sans-serif14 uppercase">See <?= $galleryCount;?> Photos</span>
			</div>
		</div>
	</div>
	<div class="gallery-popup popup">
		<div class="gallery-inner popup-inner">
			<h3 class="sans-serif20 align-center"><?= $globalColumn['gallery_popup_title'];?></h3>
			<mark class="nav-arrow prev"></mark>
			<mark class="nav-arrow next"></mark>
			<mark class="close" id="closeSlideshow"></mark>

			<div class="gallery-items">
				<?php
					$i = 0;
					foreach ($galleryItems as $galleryItem) {
						$i++;
						$galleryItemImage = $galleryItem['url'];

				?>
					<div class="gallery-item<?php if($i == 1){echo ' activeSlide';}?>" id="slide-<?= $i;?>">
						<img src="<?= $galleryItemImage;?>" />
					</div>
				<?php } ?>
			</div>
			<div class="gallery-thumbs">
				<div class="gallery-thumbs-track" style="width:<?= $width;?>px">
					<?php

						$i = 0;
						foreach ($galleryItems as $galleryItem) {
							$i++;
							$galleryItemImage = $galleryItem['url'];

					?>
						<div class="gallery-thumb" data-slide-id="slide-<?= $i;?>">
							<img src="<?= $galleryItemImage;?>" />
						</div>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
</section>
