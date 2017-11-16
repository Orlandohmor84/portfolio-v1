var gulp = require('gulp'); 

var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

var JQUERY_SCRIPTS_PATH = './src/jquery/js/*.js';

//Scripts
gulp.task('jquery-scripts', function() {
	console.log('starting scripts task');
	return gulp.src([JQUERY_SCRIPTS_PATH])
	.pipe(plumber(function(err) {
		console.log('Scripts Task Error');
		console.log(err);
		this.emit('end');
	}))
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets : ['es2015']
	}))
	.pipe(uglify())
	.pipe(concat('scripts-jquery.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/jquery/js'))
	.pipe(livereload());
});