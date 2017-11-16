var gulp = require('gulp'); 
var gulpsync = require('gulp-sync')(gulp);
var livereload = require('gulp-livereload');
var requireDir = require('require-dir');
var htmlmin = require('gulp-htmlmin');

//Global Tasks
requireDir('./gulp-tasks/');
requireDir('./gulp-tasks/html/');
requireDir('./gulp-tasks/img/');
requireDir('./gulp-tasks/less/');
requireDir('./gulp-tasks/scripts/');

//Angular Version Tasks
requireDir('./gulp-tasks/angular1/');
requireDir('./gulp-tasks/angular1/scripts/');
requireDir('./gulp-tasks/angular1/html/');

//jQuery Version Tasks
requireDir('./gulp-tasks/jquery/');
requireDir('./gulp-tasks/jquery/less/');
requireDir('./gulp-tasks/jquery/html/');
requireDir('./gulp-tasks/jquery/js/');

//PHP Version Tasks
requireDir('./gulp-tasks/php/');
requireDir('./gulp-tasks/php/php/');

//W3JS Version Tasks
requireDir('./gulp-tasks/w3js/');
requireDir('./gulp-tasks/w3js/html/');
requireDir('./gulp-tasks/w3js/data/');

//Global Paths
var IMG_PATH = './src/assets/img/**/*.{png,jpg,jpeg,svg,gif}';
var ICONS_PATH = './src/assets/img/icons/*.{png,jpg,jpeg,svg,gif}';
var LOGOS_PATH = './src/assets/img/logos/*.{png,jpg,jpeg,svg,gif}';
var SCREENSHOTS_PATH = './src/assets/img/screenshots/*.{png,jpg,jpeg,svg,gif}';
var LESS_PATH = './src/assets/less/styles.less';
var SCRIPTS_PATH = './src/angular1/assets/js/scripts.js';

/*----------- Start Angular 1 Taskrunners ----------*/
	//Framework Specific Paths
	var ANG1_APP_PATH = './src/angular1/assets/app/app.js';
	var ANG1_CONTROLLERS_PATH = './src/angular1/app/controllers/*.js';
	var ANG1_SRC_PATH = './src/angular1/*.html';
	var ANG1_VIEWS_PATH = './src/views/angular1/*.html';

	//Watch
	gulp.task('ang1-watch', ['ang1-default'], function() {
		console.log('starting angular 1 watch task');
		require('./serverBuild.js');
		//livereload.listen();
		gulp.watch(LESS_PATH, ['styles-main']);
		gulp.watch(ANG1_SCRIPTS_PATH, ['ang1-scripts']);
		gulp.watch(ANG1_SRC_PATH, ['ang1-html']);
		gulp.watch(ANG1_VIEWS_PATH, ['ang1-views']);
	});


	//Default Task
	gulp.task('ang1-default', ['styles-main', 'scripts', 'ang1-html', 'ang1-views', 'ang1-app'], function() {
		console.log('starting default angular 1 task');
	});
/*----------- End Angular 1 Taskrunners ----------*/

/*----------- Start jQuery Taskrunners ----------*/
	//Framework Specific Paths
	const JQUERY_HTML_PATH = 'src/jquery/*.html';
	const JQUERY_SCRIPTS_PATH = 'src/jquery/js/*.js';
	const JQUERY_LESS_PATH = 'src/jquery/less/*.less';

	//Watch
	gulp.task('jquery-watch', ['jquery-default'], function() {
		console.log('starting jquery watch task');
		require('./serverBuild.js');
		//livereload.listen();
		gulp.watch(LESS_PATH, ['styles-main']);
		gulp.watch(JQUERY_LESS_PATH, ['jquery-styles']);
		gulp.watch(JQUERY_SCRIPTS_PATH, ['jquery-scripts']);
		gulp.watch(JQUERY_SRC_PATH, ['jquery-html']);
	});

	//Default Task
	gulp.task('jquery-default', ['styles-main','styles-jquery', 'scripts', 'jquery-html', 'jquery-scripts'], function() {
		console.log('starting default jquery task');
	});
/*----------- End jQuery Taskrunners ----------*/

/*----------- Start PHP Taskrunners ----------*/
	//Framework Specific Paths
	const PHP_PATH = 'src/php/*.php';
	const PHP_INCLUDES_PATH = './src/php/includes/**/*.php';

	//Watch
	gulp.task('php-watch', ['php-default'], function() {
		console.log('starting php watch task');
		require('./serverBuild.js');
		//livereload.listen();
		gulp.watch(LESS_PATH, ['styles-main']);
		gulp.watch(PHP_PATH, ['php']);
		gulp.watch(PHP_INCLUDES_PATH, ['php-includes']);
	});


	//Default Task
	gulp.task('php-default', ['styles-main', 'scripts', 'php', 'php-includes'], function() {
		console.log('starting default php task');
	});
/*----------- End PHP Taskrunners ----------*/

/*----------- Start W3JS Taskrunners ----------*/
	//Framework Specific Paths
	const W3JS_HTML_PATH = 'src/w3js/*.html';
	const W2JS_INCLUDES_PATH = './src/w3js/includes/**/*.html';

	//Watch
	gulp.task('w3js-watch', ['w3js-default'], function() {
		console.log('starting w3js watch task');
		require('./serverBuild.js');
		//livereload.listen();
		gulp.watch(LESS_PATH, ['styles-main']);
		gulp.watch(W3JS_HTML_PATH, ['w3js']);
		gulp.watch(W3JS_INCLUDES_PATH, ['w3js-includes']);
	});


	//Default Task
	gulp.task('w3js-default', ['styles-main', 'scripts', 'w3js-html', 'w3js-includes'], function() {
		console.log('starting default w3js task');
	});
/*----------- End PHP Taskrunners ----------*/