var gulp = require('gulp'); 

//Move App Files
gulp.task('w3js-data', [], function() {
  console.log('Moving data files');
  gulp.src('./src/w3js/data/**/*.js')
      .pipe(gulp.dest('./public/w3js/data'));
});