/**
 * Created by Nathan on 21/06/2015.
 */
var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("default", function(){
    //console.log("Hello gulp!");
    return gulp.src("./public/js/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});