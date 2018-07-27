# TheRollins

### Clean Install for Local Development
- Copy the `wp-config-sample.php` file to the root of the project and configure the database credentials
- Install wp to create the database structure need it. You can use the `wp cli` if you want
- Enter to the theme folder (./wp-content/themes/rollins) and run `npm install`
- Finally run `gulp watch` to compile assets during development

If you are using Valet, the site will be available on your_project_name.test/ Ex. therollins.test/

After install you need to activate the Rollins theme and the ACF's plugin too.

### Advance Custom Fields
All the ACF's exported are located in `./wp-content/themes/rollins/inc/config/acf-exports/`

If you are using `wp cli` with the Wordpress plugin `advanced-custom-fields-wpcli-master` you can run the following commands to manage the acfs:

- To **Import** the ACF to your Database you have to run: `wp acf clean && wp acf import --all`. This will replace all of your current ACF in Database with the new ones
- To **Export** your ACF changes you have to run: `wp acf export --all`

If not, you can upload the json exports directly on Wordpress CMS.


### Deployment
The production server is hosted on **WP Engine** service, to deploy you just need to push the commits to the production remote (you need to configure the remote manually)

Be sure that your code has the necessary files to work before the deploy, including 'dist' folder.


