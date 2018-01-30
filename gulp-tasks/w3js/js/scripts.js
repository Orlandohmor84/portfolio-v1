var gulp = require('gulp'); 

//Move App Files
gulp.task('w3js-js', [], function() {
  console.log('Moving js files');
  gulp.src('./src/w3js/js/*.js')
      .pipe(gulp.dest('./public/w3js/js'));
});