var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

//编译scss
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

//监听scss
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'));
});

//启动服务
gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(webserver({
            port: 8484,
            livereload: true,
            open: true,
        }));
});

gulp.task('dev', gulp.series('sass', 'server', 'watch'));