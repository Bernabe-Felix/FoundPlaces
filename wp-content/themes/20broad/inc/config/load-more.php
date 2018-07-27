<?php
/**
 * AJAX Load More Posts
 *
 */


$result = array();

// Script for getting posts
function ajax_filter_get_posts( $post ) {

  // Verify nonce
  if( !isset( $_POST['afp_nonce'] ) || !wp_verify_nonce( $_POST['afp_nonce'], 'afp_nonce' ) )
    die('Permission denied');

  $category = $_POST['category'];
  $tag = $_POST['tag'];
  $exclude = $_POST['ids'];
  $type = $_POST['type'];
  $taxonomy = $_POST['taxonomy'];
  $postCount = $_POST['postCount'];
  $categoryArray = explode(',',$category);
  $tagArray = explode(',',$tag);
  $order = $_POST['order'];
  $orderby = $_POST['orderby'];

  if($category) {
     $args = array(
      'posts_per_page' => $postCount,
      'orderby' => $orderby,
      'order' => $order,
      'post_status' => 'publish',
      'has_password' => false,
      'post_type' => $postTypeArray,
      'post__not_in'=> $exclude,
      'category__in'=> $categoryArray,
    );   
  } else {

    $args = array(
      'posts_per_page' => $postCount,
      'orderby' => $orderby,
      'order' => $order,
      'post_status' => 'publish',
      'has_password' => false,
      'post_type' => $postTypeArray,
      'post__not_in'=> $exclude,
    );
  }



  $query = new WP_Query( $args );

  if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post();
        
      $postID = get_the_ID();
      $maxPages = $query->max_num_pages;
      $link = get_the_permalink($postID);
      $location = get_field('location', $postID);
      $thumbnail = get_the_post_thumbnail_url($postID);

      if($thumbnail) {
        $thumbnail = '<a href="'.$link.'" class="feed-link" style="background-image:url(\''.$thumbnail.'\')"></a>';
        $class = '';
      } else {
        $thumbnail = '';
        $class = ' full-width';
      }

      if($location) {
        $location = '<span class="sans-serif12 align-left location fade-me-in faded-in">'.$location.'</span>';
      } else {
        $location = '';
      }

      $excerpt = get_the_excerpt($postID);
      $excerpt = strip_tags(wp_trim_words($excerpt, 40));

      $results = '';


      $results = '<div class="new-elements feed-item load-item" data-post-id="'.$postID.'" data-max-pages="'.$maxPages.'">'.$thumbnail.'<div class="feed-item-info row-text-black align-left'.$class.'"><h3 class="hover-underline serif22 align-left nocase fade-me-in faded-in"><a href="'.$link.'">'.get_the_title().'</a></h3>'.$location.'<div class="paragraph_serif border-top-left"><p class="fade-me-in faded-in">'.$excerpt.'</p></div></div>';


              
      $result['response'][] = $results;
      $result['status']   = 'done';
  
  endwhile; else:
    $result['response'] = '<div class="error-item"><h3 class="headline5">There is no content that matches your filter</h3></div>';
    $result['status']   = '404';
  endif;
 
  $result = json_encode($result);
  echo $result;
  

  die();
}


add_action('wp_ajax_filter_posts', 'ajax_filter_get_posts');
add_action('wp_ajax_nopriv_filter_posts', 'ajax_filter_get_posts');
