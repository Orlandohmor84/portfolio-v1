var gulp = require('gulp'); 

var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

//Move App Files
gulp.task('app', [], function() {
  console.log('Moving view files');
  gulp.src('./src/app/*.js')
      .pipe(gulp.dest('./public/app/'));
});