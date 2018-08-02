				<!-- search form for filter -->
				<?php 
					// if this is a category or tag page
					if ($this->term) {
						$searchTerm = $this->term;
						$searchTermID = $searchTerm->term_id;
						$searchTagCat = $this->term->taxonomy;

						if ($searchTagCat == 'category') {
							$searchTagCat = 'cat';
						}
					} else {
						$searchTerm = '';
						$searchTermID = '';
						$searchTagCat = '';
					}

					// if this is a taxonomy page
					if ($this->taxonomy) {
						$searchTaxonomy = $this->taxonomy;
						$searchTaxonomyType = $searchTaxonomy->taxonomy;
						$searchTaxonomySlug = $searchTaxonomy->slug;
					} else {
						$searchTaxonomy = '';
						$searchTaxonomySlug = '';
						$searchTaxonomyType = '';
					}

					// if is a taxonomy or a category page
					if (is_tax() || is_category() || is_archive()) {
						$postType = get_post_type();
					} else {
						if ($this->searchQuery && array_key_exists('post_type', $this->searchQuery)) {
							// if there is a post type in the query
							$postType = $this->searchQuery['post_type'];
						} else {
							$postType = 'any';
						}
					}

					if (is_search()) {
						$searchPlaceholder = $this->searchPlaceholder;
					} else {
						$searchPlaceholder = '';
					}
				?>
				<?php if (!(is_page('news') || is_home() || is_archive('resources'))) { ?>
					<div class="controls">
				<?php } ?>
						 <div class="search-container">
							<form id="searchform" method="get" action="#"> 
								<input type="text" aria-label="enter search query" title="enter search query" placeholder="<?php _e('Search', '_isoc');?>" id="s" value="<?= $searchPlaceholder;?>" class="search" name="s" />
								<!-- hidden inputs to set query vars -->
								<?php 
									if (is_search()) {
										// If it the search box is on the search results page
										foreach ($this->searchQuery as $key => $queryvar) {
											if ($key != 's') {
												echo '<input type="hidden" name="'.$key.'" id="'.$key.'" value="'.$queryvar.'" />';
											}
										}
								?>
								<?php } else { ?>
									<!-- if it the search box is on cat or tax pages -->
									<?php if($postType) { ?>
										<input type="hidden" name="post_type" id="post_type" value="<?= $postType;?>" />
									<?php } ?>
									<?php if($searchTaxonomy) { ?>
										<input type="hidden" name="<?= $searchTaxonomyType;?>" id="<?= $searchTaxonomyType;?>" value="<?= $searchTaxonomySlug;?>" />
									<?php } ?>
									<?php if($searchTerm) { ?>
										<input type="hidden" name="<?= $searchTagCat;?>" id="<?= $searchTagCat;?>" value="<?= $searchTermID;?>" />
									<?php } ?>
								<?php } ?>
								<button type="submit" class="submit-btn" value="submit" aria-hidden="true">
									<span class="sr-only">Submit Search</span>
									<?php 
										echo Utils::render_template("inc/templates/svg.php", array(
											"id" => "icon-search",
											"classes" => "icon-search"
										));
									?>
								</button>
							</form>
						</div>
				<?php if (!(is_page('news') || is_home() || is_archive('resources')) ) { ?>
					</div>
				<?php } ?>