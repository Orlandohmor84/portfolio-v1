var gulp = require('gulp');

//LESS Plugins
var plumber  = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var lessAutoprefix = new LessAutoprefix({
	browsers: ['last 2 versions']
});

const JQUERY_LESS_PATH = './src/jquery/less/*.less';

//Styles for jQuery Style Sheet
gulp.task('jquery-styles', function() {
	console.log('starting jquery-styles task');
	return gulp.src('./src/jquery/less/styles-jquery.less')
	.pipe(plumber(function(err) {
		console.log('Styles Task Error');
		console.log(err);
		this.emit('end');
	}))
	.pipe(sourcemaps.init())
	.pipe(less({
		plugins: [lessAutoprefix]
	}))
	.pipe(minifyCss())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/jquery/css'))
	.pipe(livereload());
	console.log('ending jquery-styles task');
});