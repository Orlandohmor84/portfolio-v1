var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifyCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber  = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

//LESS Plugins
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var lessautoprefix = new LessAutoprefix({
	browsers: ['last 2 versions']
});

//Image Compression
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

//File paths
var SCRIPTS_PATH = './src/js/**/*.js';
var LESS_PATH = './less/styles.less';
var IMAGES_PATH = './src/img/**/*.{png,jpg,jpeg,svg,gif}';

//Styles for LESS
gulp.task('styles', function() {
	console.log('starting styles task');
	return gulp.src('./less/styles.less')
	.pipe(plumber(function(err) {
		console.log('Styles Task Error');
		console.log(err);
		this.emit('end');
	}))
	.pipe(sourcemaps.init())
	.pipe(less({
		
	}))
	.pipe(minifyCss())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./dist/css'))
	.pipe(livereload());
});

//Scripts
gulp.task('scripts', function() {
	console.log('starting scripts task');
	return gulp.src(SCRIPTS_PATH)
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
	.pipe(concat('scripts.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./dist/js'))
	.pipe(livereload());
});

//Images
gulp.task('images', function() {
	console.log('starting images task');
	return gulp.src(IMAGES_PATH)
	.pipe(imagemin(
		[
			imagemin.gifsicle(),
			imagemin.jpegtran(),
			imagemin.optipng(),
			imagemin.svgo(),
			imageminPngquant(),
			imageminJpegRecompress()
		]
	))
	.pipe(gulp.dest('./dist/img'));
});

//Watch
gulp.task('watch', ['default'], function() {
	console.log('starting watch task');
	require('./server.js');
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	gulp.watch(LESS_PATH, ['styles']);
});

gulp.task('default', ['styles', 'scripts', 'images'], function() {
	console.log('starting default task');
});