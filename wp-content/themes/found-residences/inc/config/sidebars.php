<?php
/**
 * Register our sidebars and widgetized areas.
 *
 */
function isoc_widgets_init() {

  register_sidebar( 
    array(
      'name'          => 'News post sidebar',
      'id'            => 'news_sidebar',
      'before_widget' => '<div class="component component-sidebar">',
      'after_widget'  => '</div>',
      'before_title'  => '<h2 class="headline6 align-center">',
      'after_title'   => '</h2>',
    )
  );

  register_sidebar( 
    array(
      'name'          => 'Actions post sidebar',
      'id'            => 'actions_sidebar',
      'before_widget' => '<div class="component component-sidebar">',
      'after_widget'  => '</div>',
      'before_title'  => '<h2 class="headline6 align-center">',
      'after_title'   => '</h2>',
    )
  );

  register_sidebar(   
    array(
      'name'          => 'Resources post sidebar',
      'id'            => 'resources_sidebar',
      'before_widget' => '<div class="component component-sidebar">',
      'after_widget'  => '</div>',
      'before_title'  => '<h2 class="headline6 align-center">',
      'after_title'   => '</h2>',
    )
  );

}
add_action( 'widgets_init', 'isoc_widgets_init' );