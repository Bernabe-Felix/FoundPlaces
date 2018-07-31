<!-- Team component -->
<section class="component component-team">
	<div class="content-wrapper align-center">
		<?php
			$teamMembers = $globalColumn['team_members'];
			$showCTA = $globalColumn['show_cta'];
			$showBio = $globalColumn['show_bio'];
			$ctaColor = $globalColumn['cta_color'];
			$ctaText = $globalColumn['cta_text'];
			$internalCTA = $globalColumn['internal_link_cta'];
			$externalCTA = $globalColumn['external_link_cta'];
			$ctaLink = '';
			if($showCTA == 'internal') {
				$ctaLink = $internalCTA;
			} else {
				$ctaLink = $externalCTA;
			}
		?>

		<div class="team-items">
			<?php
				if($teamMembers) {
					foreach ($teamMembers as $teamMember) {
						$teamMemberID = $teamMember;
						$teamMemberPhoto = get_the_post_thumbnail_url($teamMemberID, 'full');
						$teamMemberLink = get_the_permalink($teamMemberID);
						$teamMemberName = get_the_title($teamMemberID);
						$teamMemberTitle = get_field('title', $teamMemberID);
						$shortBio = strip_tags(get_the_excerpt($teamMemberID));
			?>
						<div class="team-item align-left">
							<div class="author-photo">
                                <a href="<?= $teamMemberLink;?>">
                                    <img src="<?= $teamMemberPhoto;?>" alt="<?= $teamMemberName;?>" title="<?= $teamMemberName;?>" />
                                </a>
							</div>
							<div class="team-info">
								<h5 class="sans-serif19">
									<a href="<?= $teamMemberLink;?>">
										<strong><?= $teamMemberName;?></strong>
									</a>
								</h5>
								<p><?= $teamMemberTitle;?></p>
								<?php if($showBio) { ?>
									<p><?= $shortBio;?></p>
								<?php } ?>
							</div>
						</div>
			<?php
					} //end foreach
				} //end if team
				wp_reset_postdata();
			?>
		</div>
		<div class="ctas align-center">
			<?php if($showCTA != 'none') { ?>
				<a href="<?= $ctaLink;?>" class="button button-<?= $ctaColor;?>"><?= $ctaText;?></a>
			<?php } ?>
		</div>
	</div>
</section>
