<section class="component-archive-feed">
    <section class="component component-feed layout-horizontal" data-component-name="LoadMore">
        <div class="content-wrapper align-center">
            <nav class="categories component">
                <span class="category-toggle sans-serif14 align-left <?php if(is_home()){echo 'activeCat';}?>" data-category="">All</span>
                <?php
                    $terms = get_terms( 'category', array(
                        'hide_empty' => false,
                    ) );

                    foreach ($terms as $term) {
                        if($term->term_id != 1) {
                ?>
                    <span class="category-toggle sans-serif14 align-left <?php if(is_category($term->term_id)){echo 'activeCat';}?>" data-category="<?= $term->term_id;?>"><?= $term->name;?></span>
                <?php } } ?>
            </nav>
            <div 
                class="feed loadable" 
                data-cat-exclude="" 
                data-tag="" 
                data-order="DESC" 
                data-orderby="date" 
                data-post-count="9" 
                data-taxonomy="" 
                data-news-type="" 
                data-search="" 
                data-category="" 
                data-post-type="post"
            >

                <?php

                    $args = array(
                        'post_type' => 'post',
                        'posts_per_page' => 9,
                    );

                    $feedQuery = new WP_Query($args);

                    if ($feedQuery->have_posts()) {
                        $maxPages = $feedQuery->max_num_pages;

                        while ($feedQuery->have_posts()) {
                            $feedQuery->the_post();


                ?>
                            <div class="feed-item load-item" data-max-pages="<?= $maxPages;?>" data-post-id="<?= get_the_id();?>">
                                <?php if (has_post_thumbnail()) : ?>
                                    <a href="<?= get_the_permalink();?>" class="feed-link" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>')">
                                    </a>
                                <?php endif; ?>
                                <div class="feed-item-info row-text-black align-left<?php if (!has_post_thumbnail()) { echo ' full-width';}?>">
                                    <h3 class="serif22 align-left nocase"><a href="<?= get_the_permalink();?>"><?php the_title();?></a></h3>
                                    <span class="sans-serif12 align-left location"><?= get_field('location');?></span>
                                    <div class="paragraph_serif border-top-left">
                                        <p><?= strip_tags( excerpt(40) ); ?></p>
                                    </div>
                                </div>
                            </div>
                <?php
                        }//end while

                    } //endif
                    wp_reset_query();
                ?>

            </div>
            <?php if($maxPages > 1) { ?>
                <div class="ctas align-center">
                    <span class="button loadmore" id="loadMore">See more stories</span>
                </div>
            <?php } ?>
        </div>
    </section>
</section>