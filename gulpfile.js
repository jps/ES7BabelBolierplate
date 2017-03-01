var gulp = require('gulp');
var babel = require("gulp-babel");
var gnf = require('gulp-npm-files');
 

gulp.task("default", function () {
    gulp.src("src/*.js")
        .pipe(babel({ "presets": ["es2017"] }))
        .pipe(gulp.dest("build"));
    
    gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./build'));
});