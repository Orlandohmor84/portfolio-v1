var gulp = require('gulp'); 
var gulpsync = require('gulp-sync')(gulp);
var livereload = require('gulp-livereload');
var requireDir = require('require-dir');
var htmlmin = require('gulp-htmlmin');
requireDir('./gulp-tasks/');
requireDir('./gulp-tasks/less/');
requireDir('./gulp-tasks/scripts/');
requireDir('./gulp-tasks/img/');
requireDir('./gulp-tasks/html/');

//Images Paths
var IMG_PATH = './src/assets/img/**/*.{png,jpg,jpeg,svg,gif}';
var ICONS_PATH = './src/assets/img/icons/*.{png,jpg,jpeg,svg,gif}';
var LOGOS_PATH = './src/assets/img/logos/*.{png,jpg,jpeg,svg,gif}';
var SCREENSHOTS_PATH = './src/assets/img/screenshots/*.{png,jpg,jpeg,svg,gif}';


//Code Paths
var LESS_PATH = './src/assets/less/styles.less';
var SCRIPTS_PATH = './src/assets/js/scripts.js';
var APP_PATH = './src/assets/app/app.js';
var CONTROLLERS_PATH = './src/app/controllers/*.js';
var SRC_PATH = './src/*.html';
var VIEWS_PATH = './src/views/*.html';

gulp.task('views', function() {
	return gulp.src([VIEWS_PATH])
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./public/views'));
});

//Watch
gulp.task('watch', ['default'], function() {
	console.log('starting watch task');
	require('./serverBuild.js');
	//livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	gulp.watch(LESS_PATH, ['styles']);
	gulp.watch(SRC_PATH, ['html']);
    gulp.watch(VIEWS_PATH, ['views']);
});


//Default Task
gulp.task('default', ['styles', 'scripts', 'html', 'views', 'app'], function() {
	console.log('starting default task');
});