</main>
</div>
<footer class="page-footer fade-me-in">
	<div class="pure-g footer-content">
		<div class="pure-u-1 pure-u-sm-1-1 pure-u-md-1-1 pure-u-lg-1-1">
			<?php if ( get_field( 'global_footer_header_text', 'options' ) ): ?>
				<h2><?= the_field('global_footer_header_text', 'options');?></h2>
			<?php endif ?>
			<?php if ( get_field( 'global_address', 'options' ) ): ?>
				<h3><?= the_field('global_address', 'options');?></h3>
			<?php endif ?>
			<?php if ( get_field( 'global_phone', 'options' ) ): ?>
				<h3><?= the_field('global_phone', 'options');?></h3>
			<?php endif ?>
			<?php
				if (has_nav_menu('footer-primary')) {
					wp_nav_menu( array( 'theme_location' => 'footer-primary' ) );
				}
			?>
			<?php
				if (has_nav_menu('footer-secondary')) {
					wp_nav_menu( array( 'theme_location' => 'footer-secondary' ) );
				}
			?>
			<?php
			$logos = get_field( 'global_footer_logos', 'options' );
			if ( $logos ) {
			?>
			<div class="logos">
			<?php
				foreach ($logos as $logo) {
				?>
					<div class="logo">
						<a href="<?= $logo['link']; ?>" target="_blank">
							<img src="<?= $logo['image']['url']; ?>" alt="<?= $logo['image']['title']; ?>" />
						</a>
					</div>
				<?php
				}
			?>
		</div>
			<?php
			}
			?>
		<?php if ( get_field( 'global_footer_legal_text', 'options' ) ): ?>
			<div class="legal"><?= the_field('global_footer_legal_text', 'options');?></div>
		<?php endif ?>
		</div>
	</div>

	<div>
		<a href="https://www.hud.gov/fairhousing" class="eho">
			<img src="<?= get_template_directory_uri(); ?>/dist/images/eho_white.png" alt="Equal Housing" />
		</a>
	</div>
</footer>
	<!--div class="modal-blackout"></div-->
<?php wp_footer(); ?>
</body>
</html>
