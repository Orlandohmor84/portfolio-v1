const gulp = require('gulp'); 

const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');

const SCRIPTS_PATH = './src/assets/js/*.js';
const ANALYTICS_PATH = './src/assets/analytics/*.js';

//Scripts
gulp.task('scripts', function() {
	console.log('starting scripts task');
	return gulp.src([SCRIPTS_PATH])
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
	.pipe(concat('scripts.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/assets/js'))
	.pipe(livereload());
});

//Scripts
gulp.task('analytics', function() {
	console.log('starting scripts task');
	return gulp.src([ANALYTICS_PATH])
	.pipe(plumber(function(err) {
		console.log('Analytics Task Error');
		console.log(err);
		this.emit('end');
	}))
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets : ['es2015']
	}))
	.pipe(uglify())
	.pipe(concat('script.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/assets/analytics'))
	.pipe(livereload());
});