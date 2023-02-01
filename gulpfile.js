const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const templateCache = require('gulp-angular-templatecache');

const templates = () =>
  gulp
    .src('src/app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(templateCache('templates.js', { standalone: true }))
    .pipe(gulp.dest('src/app/templates'));

gulp.task('templates', templates);

gulp.task('watch', () => gulp.watch('src/app/**/*.html', templates));
