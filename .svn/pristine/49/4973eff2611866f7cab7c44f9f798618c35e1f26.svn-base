/**
 * Created by memory on 15/10/28.
 */
var gulp = require("gulp");
var replace=require("gulp-just-replace");
var rev = require('gulp-rev');
var through = require('through2');
var minifyCss = require('gulp-minify-css');
var gulpif = require('gulp-if');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var filter = require('gulp-filter');
var csso = require('gulp-csso');

var BUILD = "build";
var BASE = "${resource_root}";

var htmls = [
    "can_eat_index.html",
    "can_eat_list.html",
    "can_eat_detail.html",
    "newDownload.html",
    "active_address.html",
    "knowledge_details.html",
    "direct_seeding_share.html",
    "topic_details.html",
    "canEatIndex.html",
    "canEatList.html",
    "canEatDetail.html",
    "fetal_movement_down.html"
];
var html_www = [
    "index_mobile.html",
    "index_web.html",
    "index_ie.html",
    "privacyAgreement.html",
    "agreement.html"
];


gulp.task("min", function () {
    gulp.src('./src/css/**/*.css', {base: './'})
        .pipe(minifyCss())
        .pipe(gulp.dest("minsrc"));
    gulp.src("./src/js/**/*.js", {base: './'})
        .pipe(uglify())
        .pipe(gulp.dest("minsrc"));
     gulp.src("./src/image/**/*", {base: './'})
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest("build/minsrc"));
    gulp.src("./src/iconfont/**/*", {base: "./"})
        .pipe(gulp.dest("build/minsrc"));
});

gulp.task("build",function () {
    var assets = useref.assets();
    var jsFilter = filter("*.js", {restore: true}); 
    var cssFilter = filter("*.css", {restore: true});
    var htmlFilter = filter('*.html', {restore: true});
    
    gulp.src(htmls)
       
        .pipe(htmlFilter)
        .pipe(replace([{search:/<base.*\/>/, replacement:"<base href=\"" + BASE + "\" />"},
                       {search:/src.*:.*url\(['"].*35S\.otf['"]\)/,replacement: "src: url('qihei.ttf')"},
                       {search:/src.*:.*url\(['"].*50S\.otf['"]\)/,replacement: "src: url('qiheiBold.ttf')"},
                      ]))
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(replace([{search:/<base.*\/>/, replacement:"<base href=\"" + BASE + "\" />"},
                        {search:/<meta name=\"hym\_uid\".*\/>/, replacement:'<meta name="hym_uid" content="${hym_uid}"/>'},
                       {search:/<link.*href=['"]minsrc\/src\/(css.*)['"].*\/?>/g,replacement: "<link rel=\"stylesheet\" type=\"text/css\" href=\"$1\"\/>"},
                       {search:/<script.*src=['"]minsrc\/src\/(js.*)['"].*><\/script>/g,replacement: "<script language=\"javascript\" type=\"text/javascript\" src=\"$1\"></script>"},]))
        .pipe(htmlFilter.restore)
        .pipe(cssFilter)
        .pipe(cssFilter.restore)
        .pipe(jsFilter)
        .pipe(jsFilter.restore)
        
        .pipe(gulp.dest(BUILD));
   
});
gulp.task("www_build",function () {
    var assets = useref.assets();
    var jsFilter = filter("*.js", {restore: true});
    var cssFilter = filter("*.css", {restore: true});
    var htmlFilter = filter('*.html', {restore: true});

    gulp.src(html_www)

        .pipe(htmlFilter)
        .pipe(replace([{search:/<base.*\/>/, replacement:"<base href=\"" + BASE + "\" />"},
            {search:/src.*:.*url\(['"].*35S\.otf['"]\)/,replacement: "src: url('qihei.ttf')"},
            {search:/src.*:.*url\(['"].*50S\.otf['"]\)/,replacement: "src: url('qiheiBold.ttf')"},
        ]))
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(replace([{search:/<base.*\/>/, replacement:"<base href=\"" + BASE + "\" />"},
            {search:/<meta name=\"hym\_uid\".*\/>/, replacement:'<meta name="hym_uid" content="${hym_uid}"/>'},
            {search:/<link.*href=['"]minsrc\/src\/(css.*)['"].*\/?>/g,replacement: "<link rel=\"stylesheet\" type=\"text/css\" href=\"$1\"\/>"},
            {search:/<script.*src=['"]minsrc\/src\/(js.*)['"].*><\/script>/g,replacement: "<script language=\"javascript\" type=\"text/javascript\" src=\"$1\"></script>"},]))
        .pipe(htmlFilter.restore)
        .pipe(cssFilter)
        .pipe(cssFilter.restore)
        .pipe(jsFilter)
        .pipe(jsFilter.restore)

        .pipe(gulp.dest(BUILD));

});

gulp.task("default", ["min", "build"]);
gulp.task("www", ["min", "www_build"]);
