var gulp = require('gulp'); 

//Move App Files
gulp.task('ang1-app', [], function() {
  console.log('Moving view files');
  gulp.src('./src/angular1/app/**/*.js')
      .pipe(gulp.dest('./public/angular1/app/'));
});