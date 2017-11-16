var gulp = require('gulp'); 
var htmlmin = require('gulp-htmlmin');

//Favicon Generator
var realFavicon = require ('gulp-real-favicon');
var fs = require('fs');

// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'faviconData.json';

const JQUERY_HTML_PATH = 'src/jquery/*.html'; 

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('jquery-html', function() {
	return gulp.src(JQUERY_HTML_PATH)
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./public/jquery'));
});