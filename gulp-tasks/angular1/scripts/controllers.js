var gulp = require('gulp'); 

var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

var ANG1_CONTROLLERS_PATH = './src/angular1/app/controllers/*.js';

//Scripts
gulp.task('ang1-controllers', function() {
	console.log('starting controllers task');
	return gulp.src([ANG1_CONTROLLERS_PATH])
	.pipe(plumber(function(err) {
		console.log('Controllers Task Error');
		console.log(err);
		this.emit('end');
	}))
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets : ['es2015']
	}))
	.pipe(uglify())
	.pipe(concat('controllers.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./public/angular1/app'))
	.pipe(livereload());
});