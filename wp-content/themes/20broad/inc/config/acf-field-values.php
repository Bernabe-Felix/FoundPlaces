<?php
// Allows creation of predefined select/radio button options if specific field
// names are being used
function acf_load_button_color_field_choices( $field ) {
	// reset choices
	$field['choices'] = array(
		'black' => 'Black',
		'white' => 'White',
	);

	return $field;
}

function acf_load_component_choices( $field ) {
	$dir	= THEME_DIR . '/inc/components/custom/';
	$allFiles = scandir($dir);
	$files = array_diff($allFiles, array('.', '..', '.DS_Store'));
	$field['choices'] = $files;

	return $field;
}

function acf_load_cta_choices( $field ) {
	// Reset choices
	$field['choices'] = array(
		'none' => 'No CTA',
		'internal' => 'Internal Link CTA',
		'external' => 'External Link CTA'
	);


	return $field;
}

function acf_load_theme_choices( $field ) {
	// Reset choices
	$field['choices'] = array(
        'white' => 'White',
		'swirl' => 'Swirl',
		'default' => 'Default',
		'granny-smith' => 'Granny Smith'
	);

	return $field;
}

// Preload shared select box & radio button values. 'name' is the field name
// that will be assigned to each choice set
add_filter('acf/load_field/name=button_color', 'acf_load_button_color_field_choices');
add_filter('acf/load_field/name=show_cta', 'acf_load_cta_choices');
add_filter('acf/load_field/name=theme', 'acf_load_theme_choices');
add_filter('acf/load_field/name=component_type', 'acf_load_component_choices');
?>
