<?php
	/**
	 * Text component
	 */
?>
<section class="component component-text fade-me-in faded-in">
<!-- 	<div class="content-wrapper"> -->
		<?php
			$pageHeader = $globalColumn['page_header'];
			$textIcon = $globalColumn['text_icon'];
			$textHeadline = $globalColumn['text_headline'];
			$textSubhead = $globalColumn['text_subhead'];
			$textEyebrow = $globalColumn['text_eyebrow'];
			$textAlignment= $globalColumn['text_alignment'];
			$textStyle = $globalColumn['text_headline_style'];

			$textInlineCSS = '';
			$textHeadlineBackgroundImageURL = $globalColumn['text_headline_background_image']['url'];

			if ($textHeadlineBackgroundImageURL) {
				$textInlineCSS = 'style="background-image: -webkit-linear-gradient(transparent, transparent), url(' . $textHeadlineBackgroundImageURL . ');background-position: center center;background-size: cover;background-image: -o-linear-gradient(rgba(0,0,0,.1);background-color: rgba(0,0,0,.5));-webkit-background-clip: text;-webkit-text-fill-color: rgba(0,0,0,.2)";';
			}

			$textCopy = $globalColumn['text_copy'];
		?>
		<?php if ($textIcon) { ?><img src="<?= $textIcon['url']; ?>" class="text-icon align-<?= $textAlignment; ?> <?php if ($smallIcon) { echo ' small-icon'; } ?>" alt="<?= $textIcon['title']; ?>" title="<?= $textIcon['title']; ?>" /><?php } ?>
		<?php if ($textEyebrow) { ?><h4 class="sans-serif24 headline4 text-eyebrow align-<?= $textAlignment; ?>"><?= $textEyebrow; ?></h4><?php } ?>

		<?php if ($textHeadline or $textSubhead) { ?>
		<div class="component-text-header fade-me-in">
			<?php
				if ($pageHeader) {
					if ($textHeadline) {
						?>
						<h1 class="page-title headline1 text-headline <?= $textStyle;?> align-<?= $textAlignment; ?>" <?= $textInlineCSS; ?>><?= $textHeadline; ?></h1>
						<?php
					}
				} else {
					if ($textHeadline) {
						?>
						<h2 class="headline2 text-headline <?= $textStyle;?> align-<?= $textAlignment; ?>" <?= $textInlineCSS; ?>><?= $textHeadline; ?></h2>
						<?php
					}
				}
			?>
			<?php if ($textSubhead) { ?><h3 class="headline3 text-subhead align-<?= $textAlignment; ?>"><?= $textSubhead; ?></h3><?php } ?>
		</div>
		<?php } ?>

		<?php if ($textCopy) { ?>
		<div class="component-text-copy fade-me-in">
			<div class="body-text align-<?= $textAlignment; ?>"><?= $textCopy; ?>
			</div>
		</div><?php } ?>

		<?php
			echo Utils::render_template("inc/templates/cta.php", array(
				"globalColumn" => $globalColumn,
				"textAlignment" => $textAlignment
			));
		?>
<!-- 	</div> -->
</section>
