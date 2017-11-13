var gulp = require('gulp'); 

//Move App Files
gulp.task('app', [], function() {
  console.log('Moving view files');
  gulp.src('./src/app/**/*.js')
      .pipe(gulp.dest('./public/app/'));
});