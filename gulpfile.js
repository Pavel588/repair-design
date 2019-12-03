const gulp = require("gulp")
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');


 
// Static server
gulp.task('browser-sync', function (done) { 
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);

    gulp.watch("./css/*.css", cssmin); 
});



gulp.task('cssmin', function (done) {
    gulp.src(['./css/*.css', '!./css/*.min.css']) 
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("./css"));
        done();
});

gulp.task('build', gulp.series('cssmin', 'browser-sync'));