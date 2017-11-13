var gulp = require('gulp'); 
var gulpsync = require('gulp-sync')(gulp);
var livereload = require('gulp-livereload');
var requireDir = require('require-dir');
var htmlmin = require('gulp-htmlmin');
requireDir('./gulp-tasks/');
requireDir('./gulp-tasks/html/');
requireDir('./gulp-tasks/img/');
requireDir('./gulp-tasks/less/');
requireDir('./gulp-tasks/scripts/');
requireDir('./gulp-tasks/angular1/');
requireDir('./gulp-tasks/angular1/scripts/');
requireDir('./gulp-tasks/angular1/html/');

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
gulp.task('ang1-watch', ['default'], function() {
	console.log('starting watch task');
	require('./serverBuild.js');
	//livereload.listen();
	gulp.watch(ANG1_SCRIPTS_PATH, ['ang1-scripts']);
	gulp.watch(LESS_PATH, ['styles']);
	gulp.watch(ANG1_SRC_PATH, ['ang1-html']);
    gulp.watch(ANG1_VIEWS_PATH, ['ang1-views']);
});


//Default Task
gulp.task('ang1-default', ['styles', 'scripts', 'ang1-html', 'ang1-views', 'ang1-app'], function() {
	console.log('starting default task');
});
/*----------- End Angular 1 Taskrunners ----------*/