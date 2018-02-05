const gulp = require("gulp");
const pages = require("gulp-gh-pages");

gulp.task('pages', () => {
    return gulp.src('./dist/**/*')
    .pipe(pages())
});