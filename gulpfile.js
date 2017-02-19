var gulp = require('gulp');
var exec = require('child_process').exec;
var phpcs = require('gulp-phpcs');

gulp.task('phpunittest', function (cb) {
  exec("cd php && phpunit ./", function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
});

gulp.task('phplint', function (cb) {
  return gulp.src(['php/**/*.php', '!./**/*test.*', '!./**/*Test.*'])
    // Validate files using PHP Code Sniffer 
    .pipe(phpcs({
        bin: 'phpcs',
        standard: 'PSR2',
        warningSeverity: 0
    }))
    // Log all problems that was found 
    .pipe(phpcs.reporter('log'));
});

gulp.task('watch-php', function () {
  gulp.watch('./php/**/*.*', ['phplint']);
  gulp.watch('./php/**/*.*', ['phpunittest']);
});

