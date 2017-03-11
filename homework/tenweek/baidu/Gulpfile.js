/**
 * Created by memory on 15/10/28.
 */
var gulp = require("gulp");
var replace=require("gulp-just-replace");
var rev = require('gulp-rev');
var minifyCss = require('gulp-minify-css');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var filter = require('gulp-filter');
var csso = require('gulp-csso');
var gulpSequence = require('gulp-sequence');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var BUILD = "build";
var BASE = "./src/";
var htmls = "index.html";

gulp.task("min", function () {
    //合并压缩css
    gulp.src(['./src/css/myreset.css','./src/css/small.css'], {base: './'})
        .pipe(concat('small.css'))
        .pipe(gulp.dest('build/src/css/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCss())
        .pipe(gulp.dest('build/src/css/'));
    gulp.src(['./src/css/myreset.css','./src/css/index.css'], {base: './'})
        .pipe(concat('index.css'))
        .pipe(gulp.dest('build/src/css/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCss())
        .pipe(gulp.dest('build/src/css/'));
    //合并压缩js
    gulp.src(['./src/js/baidu/jquery-1.9.1.js','./src/js/baidu/index.js'],{base: './'})
        .pipe(concat('index.js'))
        .pipe(gulp.dest('build/src/js/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('build/src/js/'));
    //图片
    gulp.src("./src/image/**/*", {base: './'})
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest("build"));
});
gulp.task("build",function () {
    var assets = useref.assets();

    var htmlFilter = filter('*.html', {restore: true});
//加上base 替换引入css和js的语句
    gulp.src(htmls)
        .pipe(htmlFilter)
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(replace([{search:/<base.*\/>/, replacement:"<base href=\"" + BASE + "\" />"},
            {search:/<link.*href=['"]minsrc\/src\/(css.*)['"].*\/?>/g,replacement: "<link rel=\"stylesheet\" type=\"text/css\" href=\"$1\"\/>"},
            {search:/<link.*href=['"]build\/src\/(css.*)['"].*\/?>/g,replacement: "<link rel=\"stylesheet\" type=\"text/css\" media=\"screen and \(max-width: 768px\)\" href=\"$1\"\/>"},
            {search:/<script.*src=['"]minsrc\/src\/(js.*)['"].*><\/script>/g,replacement: "<script language=\"javascript\" type=\"text/javascript\" src=\"$1\"></script>"},]))
        .pipe(htmlFilter.restore)


        .pipe(gulp.dest(BUILD));
});

gulp.task('www',function (cb) {
    gulpSequence('min', 'build', cb);
});


