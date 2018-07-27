<header class="main-header component" data-component-name="Nav">
	<div class="header-inner">
		<div class="site-frame">
			<div class="site-frame-inner">
				<div class="site-frame-bottom">
					<?php if ( get_field( 'global_phone', 'options' ) ): ?>
						<a href="tel:<?= the_field('global_phone', 'options');?>"><i class="fa fa-phone"></i></a>
					<?php endif ?>
					<?php if ( get_field( 'instagram_url', 'options' ) ): ?>
						<a href="<?= the_field('instagram_url', 'options');?>" target="_blank"><i class="fa fa-instagram"></i></a>
					<?php endif ?>
				</div>
				<div class="site-frame-right">
					<?php if ( get_field( 'global_site_frame_right_link_url', 'options' ) ): ?>
						<a href="<?= the_field('global_site_frame_right_link_url', 'options');?>"><?= the_field('global_site_frame_right_link_text', 'options');?></a>
					<?php endif ?>
				</div>
			</div>
		</div>
		<div class="hamburger-container">
			<mark class="hamburger"></mark>
		</div>

		<?php
			if (has_nav_menu('primary-left')) {
				wp_nav_menu( array( 'theme_location' => 'primary-left' ) );
			}
		?>
		<h1 class="site-title"><a href="<?php echo home_url(); ?>"><?php bloginfo( 'name' ); ?></a></h1>
		<?php
			if (has_nav_menu('primary-right')) {
				wp_nav_menu( array( 'theme_location' => 'primary-right' ) );
			}
		?>
	</div>
</header>
<div class="main-header-spacer"></div>
<div class="nav-mobile">
	<?php
		if (has_nav_menu('mobile-nav')) {
			wp_nav_menu( array( 'theme_location' => 'mobile-nav' ) );
		}
	?>
</div>
