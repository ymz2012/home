var gulp = require("gulp");
var fileinclude=require("gulp-file-include");
var distPath = "./html";
var htmls = [
    "index1.html"
];
gulp.task('include',function () {
    return gulp.src(htmls)
    .pipe(fileinclude())
    .pipe(gulp.dest(distPath));
});

gulp.task("default", ["include"]);
    


