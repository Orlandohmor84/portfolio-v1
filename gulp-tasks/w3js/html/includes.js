var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var fs = require('fs');

const W3JS_INCLUDES_PATH = './src/w3js/includes/**/*.html';

gulp.task('w3js-includes', [], function() {
    console.log('Moving all w3js includes files');
    gulp.src(W3JS_INCLUDES_PATH)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public/w3js/includes/'));
});