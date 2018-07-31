<div class="component-share component" data-component-name="Share">
	<?php
	    $url = get_permalink();
	    $encoded = urlencode($url);
	?>
	<div class="post-share">
	    <span class="sans-serif14">Share</span>
	    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $encoded;?>" target="_blank" data-options="menubar=1,resizable=1,width=600,height=400" class="shareLink"><i class="fa fa-facebook circle circle-black"></i></a>
	    <a href="https://twitter.com/home/?status=<?php the_title() ?>: <?php the_permalink() ?> via @" target="_blank" data-options="menubar=1,resizable=1,width=600,height=400" class="shareLink"><i class="fa fa-twitter circle circle-black"></i></a>
		<a href="" target="_blank"><i class="fa fa-envelope  circle circle-black"></i></a>
	</div>
</div>
