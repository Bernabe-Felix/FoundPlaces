<?php
add_action('init', 'create_post_type');

// Register custom post types and taxonomies here.
function create_post_type() {
	// Register news tax
	// register_taxonomy('news_type', array('news'), 
	// 	array(
	// 		'hierarchical' => true,
	// 		'labels' => array(
	// 			'name' => __('News Types'),
	// 			'singular_name' => __('News Type'),
	// 			'add_new_item' => __('Add News Type')
	// 		),			
	// 		'show_ui' => true,
	// 		'show_admin_column' => true,
	// 		'query_var' => true,
	// 		'rewrite' => array('slug' => 'news', 'with_front' => false),
	// 	)
	// );

	// 	register_taxonomy('org_level', array('people'), array(
	// 		'hierarchical' => true,
	// 		'labels' => array(
	// 			'name' => __('Org Level'),
	// 			'singular_name' => __('Org Level'),
	// 			'add_new_item' => __('Add Org Level')
	// 		),
	// 		'show_ui' => true,
	// 		'show_admin_column' => true,
	// 		'query_var' => true,
	// 		'rewrite' => array('slug' => 'org', 'with_front' => false),
	// 	)
	// );

	// Custom post types
	// register_post_type('people',
	// 	array(
	// 		'labels' => array(
	// 			'name' => __('People'),
	// 			'singular_name' => __('Person')
	// 		),
	// 		'public' => true,
	// 		'has_archive' => true,
	// 		'menu_position'=> 4,
	// 		'rewrite' => array('slug' => 'people', 'with_front' => false),
	// 		'supports' => array('title', 'thumbnail', 'excerpt', 'editor', 'author'),
	// 		'menu_icon'=> 'dashicons-universal-access',
	// 		'exclude_from_search' => false,
	// 		'publicly_queryable'=> true,
	// 		'show_in_nav_menus'=> true,
	// 		'query_var' => true,
	// 		'taxonomies' => array('org_level')
	// 	)
	// );

	// register_post_type('news',
	// 	array(
	// 		'labels' => array(
	// 			'name' => __('News'),
	// 			'singular_name' => __('News')
	// 		),
	// 		'public' => true,
	// 		'has_archive' => false,
	// 		'menu_position'=> 4,
	// 		'rewrite' => array('slug' => 'press/%news_type%', 'with_front' => false),
	// 		'supports' => array('title', 'thumbnail', 'excerpt', 'editor', 'author'),
	// 		'menu_icon'=> 'dashicons-media-document',
	// 		'exclude_from_search' => false,
	// 		'publicly_queryable'=> true,
	// 		'show_in_nav_menus'=> true,
	// 		'query_var' => true,
	// 		'taxonomies' => array('news_type')
	// 	)
	// );
}

// https://kirill.rocks/using-same-slug-for-custom-post-type-and-custom-taxonomy/
add_filter('post_type_link', 'cj_update_permalink_structure', 10, 2);

function cj_update_permalink_structure($post_link, $post) {
	if (false !== strpos($post_link, '%news_type%')) {
		$taxonomy_terms = get_the_terms($post->ID, 'news_type');
		$year = get_the_time('Y', $post->ID);

		if ($taxonomy_terms) {
			foreach ($taxonomy_terms as $term) { 
					$post_link = str_replace('%news_type%', $term->slug, $post_link);
			}
		}
	}

	return $post_link;
}

add_filter('pre_get_posts', 'query_post_type');

function query_post_type() {
	return false;
}
?>