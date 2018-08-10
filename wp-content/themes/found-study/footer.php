</main>
</div>
<footer class="component component-footer component-theme-casper fade-me-in" data-component-name="StudyFooter">
	<div class="pure-g footer-content">
        <!--    Offset    -->
        <div class="pure-u-sm-1-12 pure-u-lg-2-24"> </div>
		<div class="pure-u-sm-10-12 pure-u-lg-6-24 text headline2">
            <?= the_field('left_text', 'options') ?>
		</div>
        <div class="pure-u-sm-1-12 pure-u-lg-2-24"> </div>

        <!--    Offset    -->
        <div class="pure-u-sm-1-12 pure-u-lg-5-24"> </div>
        <div class="pure-u-sm-10-12 pure-u-lg-8-24 text headline2">
            <?= the_field('right_text', 'options') ?>
            <div class="contact-link">
                <a class="study-link calypso" href="mailto:<?= the_field('contact_email', 'options'); ?>"><?= the_field('contact_email', 'options'); ?></a>
            </div>
        </div>
	</div>

    <div class="footer-bottom">
        <span class="copyright">© <?= the_field('copyright_label', 'options') ?></span>

        <div class="footer-menu">
            <?php
            if (has_nav_menu('footer-primary')) {
                wp_nav_menu( array( 'theme_location' => 'footer-primary' ) );
            }
            ?>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
