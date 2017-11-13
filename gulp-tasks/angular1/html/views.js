var gulp = require('gulp'); 
var htmlmin = require('gulp-htmlmin');

//File paths
var ANG1_VIEWS_PATH = './src/angular1/views/*.html';

gulp.task('ang1-views', function() {
	return gulp.src([ANG1_VIEWS_PATH])
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./public/angular1/views'));
});

