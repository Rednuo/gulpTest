var gulp=require('gulp');
var $=require('gulp-load-plugins')();
var Config = require('./gulpfile.config.js');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

function prod() {
    gulp.task('html', function () {
        return gulp.src(Config.html.src)
            .pipe(gulp.dest(Config.html.dist));
    });
    gulp.task('assets', function () {
        return gulp.src(Config.assets.src)
            .pipe(gulp.dest(Config.assets.dist));
    });
    // gulp.task('css', function () {
    //     return gulp.src(Config.css.src)
    //         .pipe($.autoprefixer('last 2 version'))
    //         .pipe(gulp.dest(Config.css.dist))
    //         // .pipe($.rename({
    //         //     suffix: '.min'
    //         // }))
    //         .pipe($.cssnano()) //执行压缩
    //         .pipe(gulp.dest(Config.css.dist));
    // });
    gulp.task('less', function () {
        return gulp.src(Config.less.src)
            .pipe($.autoprefixer('last 2 version'))
            .pipe($.less())
            .pipe(gulp.dest(Config.less.dist))
            // .pipe($.rename({
            //     suffix: '.min'
            // })) //rename压缩后的文件名
            .pipe($.cssnano()) //执行压缩
            .pipe(gulp.dest(Config.less.dist));
    });
    gulp.task('js', function () {
        return gulp.src(Config.js.src)
            .pipe($.jshint('.jshintrc'))
            .pipe($.jshint.reporter('default'))
            .pipe(gulp.dest(Config.js.dist))
            .pipe($.rename({
                suffix: '.min'
            }))
            .pipe($.uglify())
            .pipe(gulp.dest(Config.js.dist));
    });
    gulp.task('js-concat', function () {
        return gulp.src(Config.js.src)
            .pipe($.jshint('.jshintrc'))
            .pipe($.jshint.reporter('default'))
            .pipe($.concat(Config.js.build_name))
            .pipe(gulp.dest(Config.js.dist))
            .pipe($.rename({
                suffix: '.min'
            }))
            .pipe($.uglify())
            .pipe(gulp.dest(Config.js.dist));
    });
    gulp.task('images', function () {
        return gulp.src(Config.img.src)
            .pipe($.imagemin({
            optimizationLevel: 3
                , progressive: true
                , interlaced: true
            }))
            .pipe(gulp.dest(Config.img.dist));
    });
    // gulp.task('watch',function () {
    //     $.livereload.listen();
    //     gulp.watch('src/**/*.*',function (event) {
    //         $.livereload.changed(event.path)
    //     })
    // });
    gulp.task('build', ['html', 'less', 'js', 'assets', 'images']);
}
module.exports = prod;