// var gulp = require('gulp');
// var browserSync = require('browser-sync').create();

// gulp.task('sync', function() {
//  browserSync.init({
//  proxy: "my_project.dev",
//  files: "*.css,*.php,css/*css"
// });
// });

var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

var gulpLoadPlugins = require('gulp-load-plugins'),
    $ = gulpLoadPlugins();
 
function css() {
    return src('src/*.scss')
    .pipe (sass())
    .pipe (dest('dist/css'))
}

exports.default = function () {
    watch ('src/*.scss', css);
    watch ('src/modules/*.scss',css);
}

// exports.default = css;