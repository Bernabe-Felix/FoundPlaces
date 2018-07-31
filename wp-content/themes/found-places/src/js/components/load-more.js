function LoadMore($el) {
	// Load more posts in a tab
	function initLoadMorePosts() {
		var $section = $(this).closest('.component-feed').find('.loadable');
		var item = $section.find('.load-item');
		var category = $section.attr('data-category');
		var type = $section.attr('data-post-type');
		var taxonomy = $section.attr('data-taxonomy');
		var postCount = $section.attr('data-post-count');
		var catExclude = $section.attr('data-cat-exclude');
		var order = $section.attr('data-order');
		var orderby = $section.attr('data-orderby');
		var thisPost = $section.attr('data-this-post');

		var postIDs = [];

		$(item).each(function () {
			var postID = $(this).data('post-id');
			postIDs.push(postID);
		});

		postIDs.push(thisPost);

		var data = {
			'action': 'filter_posts', // function to execute load-more.php
			'afp_nonce': afp_vars.afp_nonce, // wp_nonce
			'category': category, // selected category
			'ids': postIDs, //excluded posts
			'type': type,
			'taxonomy': taxonomy,
			'postCount': postCount,
			'catExclude': catExclude, //excluded categories
			'order': order,
			'orderby': orderby,
		};

		$.ajax({
			'type': 'post',
			'dataType': 'json',
			'url': afp_vars.afp_ajax_url,
			'data': data,
			success: function (data, textStatus, XMLHttpRequest) {
				// Add new posts
				$section.append( data.response );
			
				// Define new elements
				var $newElems = $('.new-elements');
				$newElems.addClass('slideIn').removeClass('new-elements');

				// Deactivate load more button when there are no more posts to load
				if ($('.load-item:last-child').data('max-pages') === 1) {
					$('#loadMore').text('End of posts').addClass('button-inactive');
				}
			},
			error: function(MLHttpRequest, textStatus, errorThrown) {
				$('#loadMore').text(errorThrown).addClass('button-inactive');
				
			},
			complete: function () {
			}
			
		});				
	}

	function archiveToggle() {
		$(this).addClass('activeCat').siblings().removeClass('activeCat');

		var catID = $(this).data('category');
		var $section = $(this).closest('.component-feed').find('.loadable');
		var data = {
			'action': 'filter_posts', // function to execute load-more.php
			'afp_nonce': afp_vars.afp_nonce, // wp_nonce
			'category': catID, // selected category
		};

		$.ajax({
			'type': 'post',
			'dataType': 'json',
			'url': afp_vars.afp_ajax_url,
			'data': data,
			success: function(data, textStatus, XMLHttpRequest) {
				// Add new posts
				$section.html( data.response );
			
				// Define new elements
				var $newElems = $('.new-elements');
				$newElems.addClass('slideIn').removeClass('new-elements');

				// Deactivate load more button when there are no more posts to load
				if ($('.load-item:last-child').data('max-pages') === 1) {
					$('#loadMore').text('End of posts').addClass('button-inactive');
				} else {
					$('#loadMore').text('See more stories').removeClass('button-inactive');
				}
			},
			error: function (MLHttpRequest, textStatus, errorThrown) {
				$('#loadMore').text(errorThrown).addClass('button-inactive');
			},
			complete: function () {
			}
		});
	}

	this.init = function ($el) {
		$el = $el;
		$el.find('.loadmore').on('click', initLoadMorePosts);
		$el.find('.category-toggle').on('click', archiveToggle);

		return this;
	}

	return this.init($el);
}

export default LoadMore;