</main>
</div>
<footer class="component-footer component-theme-merino">
	<div class="pure-g footer-content">
        <!--    Offset    -->
        <div class="pure-u-sm-1-12  "> </div>
		<div class="pure-u-sm-10-12 pure-u-lg-3-12 text">
            <?= the_field('left_text', 'options') ?>
		</div>

        <!--    Offset    -->
        <div class="pure-u-sm-2-12 pure-u-lg-3-12"> </div>
        <div class="pure-u-sm-8-12 pure-u-lg-4-12 text">
            <?= the_field('right_text', 'options') ?>
            <div class="contact-link">
                <a class="found-link desert" href="mailto:<?= the_field('contact_email', 'options'); ?>"><?= the_field('contact_email', 'options'); ?></a>
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
