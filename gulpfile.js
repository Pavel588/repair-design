const {src, dest, watch} = require("gulp")
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sass = require('gulp-sass');



// Static server
function bs() {
    serveSass();
    cssMin();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
    watch("./css/*.css", cssmin); 
};


function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass()) 
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

function cssMin() {
    return src(['./css/*.css', '!./css/*.min.css']) 
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest("./css"));
      
}; 

exports.serve = bs;