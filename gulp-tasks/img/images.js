var gulp = require('gulp');

//Image Compression
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var imageResize = require('gulp-image-resize');

//Images Paths
var IMG_PATH = './src/assets/img/**/*.{png,jpg,jpeg,svg,gif}';
var ICONS_PATH = './src/assets/img/icons/*.{png,jpg,jpeg,svg,gif}';
var LOGOS_PATH = './src/assets/img/logos/*.{png,jpg,jpeg,svg,gif}';
var SCREENSHOTS_PATH = './src/assets/img/screenshots/*.{png,jpg,jpeg,svg,gif}';



//Compresses Images
gulp.task('images-icons', function() {
	console.log('starting images task');
	return gulp.src(ICONS_PATH)
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
	.pipe(gulp.dest('./public/assets/img/icons/'));
});

//Compresses Images
gulp.task('images-screenshots', function() {
	console.log('starting images task');
	return gulp.src(SCREENSHOTS_PATH)
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
	.pipe(gulp.dest('./public/assets/img/screenshots/'));
});

//Resize Images
gulp.task('images-resize', function() {
	console.log('starting featured-atlantic task');
    gulp.src('./public/assets/img/**/*.{png,jpg,jpeg,svg,gif}')
    .pipe(imageResize({
	    width : 720,
	    height : 432,
	    crop : true,
	    upscale : false
    }))
    .pipe(gulp.dest('public/assets/img/'));
});

