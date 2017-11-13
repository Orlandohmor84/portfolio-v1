var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var fs = require('fs');

const PHP_INCLUDES_PATH = './src/php/includes/**/*.php';

gulp.task('php-includes', [], function() {
  console.log('Moving all php includes files');
  gulp.src(PHP_INCLUDES_PATH)
        .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./public/php/includes/'));
});