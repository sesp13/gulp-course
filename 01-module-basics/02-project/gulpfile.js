const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function (done) {
  return gulp
    .src('./src/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
  done();
});
