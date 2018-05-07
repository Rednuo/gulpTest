var gulp=require('gulp');
var $=require('gulp-load-plugins')();
var Config = require('./gulpfile.config.js');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

function dev() {
    gulp.task('html:dev',function () {
        return gulp.src(Config.html.src)
            .pipe(gulp.dest(Config.html.dist))
            .pipe(reload({stream:true}));
    });
    gulp.task('assets:dev',function () {
        return gulp.src(Config.assets.src)
            .pipe(gulp.dest(Config.assets.dist))
            .pipe(reload({stream:true}));
    });
    // gulp.task('css:dev',function () {
    //     return gulp.src(Config.css.src)
    //         .pipe(gulp.dest(Config.css.dist))
    //         .pipe(reload({stream:true}));
    // });
    gulp.task('less:dev',function () {
        return gulp.src(Config.less.src)
            .pipe($.less())
            .pipe(gulp.dest(Config.less.dist))
            .pipe(reload({stream:true}));
    });
    gulp.task('js:dev',function () {
        return gulp.src(Config.js.src)
            // .pipe(rev())
            .pipe($.jshint('.jshintrc'))
            .pipe($.jshint.reporter('default'))
            .pipe(gulp.dest(Config.js.dist))
            // .pipe(rev.manifest())
            // .pipe(gulp.dest(Config.rev))
            .pipe(reload({stream:true}));
    });
    gulp.task('images:dev', function () {
        return gulp.src(Config.img.src)
            .pipe($.imagemin({
                optimizationLevel: 3,
                progressive: true,
                interlaced: true
            }))
            .pipe(gulp.dest(Config.img.dist))
            .pipe(reload({
                stream: true
            }));
    });
    gulp.task('dev', ['html:dev', 'less:dev', 'js:dev', 'assets:dev', 'images:dev'], function () {
        browserSync.init({
            server: {
                baseDir: Config.dist
            },
            notify: false
        });
        // Watch .html files
        gulp.watch(Config.html.src, ['html:dev']);
        // Watch .css files
        // gulp.watch(Config.css.src, ['css:dev']);
        // Watch .scss files
        gulp.watch(Config.less.src, ['less:dev']);
        // Watch assets files
        gulp.watch(Config.assets.src, ['assets:dev']);
        // Watch .js files
        gulp.watch(Config.js.src, ['js:dev']);
        // Watch image files
        gulp.watch(Config.img.src, ['images:dev']);
    });
}
module.exports=dev;