<?php

// Custom directory acf exports
function add_acf_json_folder_path( $paths ) {
	$paths['path'] = get_template_directory() . '/inc/config/acf-exports/';

	return $paths;
}

add_filter( 'acfwpcli_fieldgroup_paths', 'add_acf_json_folder_path' );