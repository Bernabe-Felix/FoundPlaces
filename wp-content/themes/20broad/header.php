<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
	<meta name="description" content="<?= wp_strip_all_tags(get_the_excerpt()); ?>">
	<title><?= bloginfo('name'); ?><?= wp_title('-') ?></title>
	<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri() . "/dist/css/style.css"; ?>" type="text/css" media="screen" />
	<?php include_once 'inc/templates/favicons.php'; ?>
	<?php include_once 'inc/templates/google-tag-manager.php'; ?>
	<?php include_once 'inc/templates/call-rail.php'; ?>
	<?php wp_head(); ?>
</head>
<body <?php body_class();?>>



	<?php
		if (function_exists('gtm4wp_the_gtm_tag')) {
			gtm4wp_the_gtm_tag();
		}
	?>

	<!-- see app.js for usage -->
	<div class="breakpoint phone"></div>
	<div class="breakpoint tablet-portrait"></div>
	<div class="breakpoint tablet-landscape"></div>
	<div class="breakpoint desktop"></div>
	<div class="breakpoint xl"></div>

	<?php include_once(get_template_directory() . "/inc/config/svg-sprite.php"); ?>
	<?php include_once 'inc/templates/nav.php'; ?>
		<div class="content-container component" data-component-name="FadeInElements">
			<main class="content">
