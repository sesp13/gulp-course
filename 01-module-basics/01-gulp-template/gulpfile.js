const { task, src } = require('gulp');

task('hello', function (done) {
  console.log('Hello World');
  done();
});

task('hello-2', function () {
  return src('./digits.txt');
});
