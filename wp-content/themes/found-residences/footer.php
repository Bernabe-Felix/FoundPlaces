</main>
</div>
<footer class="component-footer component-theme-merino fade-me-in">
	<div class="pure-g footer-content">
        <!--    Offset    -->
        <div class="pure-u-sm-1-12  "> </div>
		<div class="pure-u-sm-10-12 pure-u-lg-3-12 text headline2">
            We’re working on adding more information to this site. Please check back soon.
		</div>
        <div class="pure-u-sm-1-12"> </div>

        <!--    Offset    -->
        <div class="pure-u-sm-1-12 pure-u-lg-3-12"> </div>
        <div class="pure-u-sm-10-12 pure-u-lg-4-12 text headline2">
            If you’d like to learn more about us, please email
            <div class="contact-link">
                <a class="residences-link tan-hide" href="mailto:info@foundresidences.com">info@foundresidences.com</a>
            </div>
        </div>
	</div>

    <div class="footer-bottom">
        <span class="residences-link solitaire copyright">© 2018 FOUND Residences</span>

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
