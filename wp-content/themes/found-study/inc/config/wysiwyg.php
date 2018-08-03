<?php
// Creating the style selector stayed the same
function my_mce_buttons($buttons) {
	array_unshift($buttons, 'styleselect');
	array_push($buttons, 'hr');
	return $buttons;
}
add_filter('mce_buttons', 'my_mce_buttons');

function mce_mod($init) {
	// $init['style_formats']	doesn't work - instead you have to use tinymce style selectors
	$style_formats = array(
		array(
			'title' => 'Headline 1',
			'block' => 'h1',
			'classes' => 'headline1',
			'wrapper' => false,
		),

		array(
			'title' => 'Headline 2',
			'block' => 'h2',
			'classes' => 'headline2',
			'wrapper' => false,
		),

		array(
			'title' => 'Headline 3',
			'block' => 'h3',
			'classes' => 'headline3',
			'wrapper' => false,
		),

		array(
			'title' => 'Headline 4',
			'block' => 'h4',
			'classes' => 'headline4',
			'wrapper' => false,
		),

		array(
			'title' => 'Paragraph Sans Serif',
			'block' => 'p',
			'classes' => 'paragraph_sans_serif',
			'wrapper' => false,
		),
	);

	$init['style_formats_merge'] = true;
	$init['style_formats'] = json_encode($style_formats);

	return $init;
}
add_filter('tiny_mce_before_init', 'mce_mod');

function my_mce4_options($init) {
	$custom_colours =	'
						"002136", "Navy",
						"808080", "Grey",
						"A17F44", "Gold",';

	// build colour grid default+custom colors
	$init['textcolor_map'] = '[' . $custom_colours . ']';

	// enable 6th row for custom colours in grid
	$init['textcolor_rows'] = 3;

	return $init;
}
add_filter('tiny_mce_before_init', 'my_mce4_options');
