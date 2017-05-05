# WP-NG4 Starter Theme
Minimal Wordpress theme as service model. Angular (v4) as front-end UI layer. 

## Usage
* Clone app and run npm install
* To run web server run ng serve command (Angular CLI) via terminal shell
* The content is managed in posts in the WP admin panel.
* To push the project to the server, run ng build --prod --deploy-url="/wp-content/themes/{THEME_DIRECTORY_NAME}/dist/" from your command line. This will output a dist folder. Upload index.php, styles.css, functions.php, and the dist folder to your theme directory on your server. You should be good to go!