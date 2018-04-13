var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

gulp.task('css', function() {
    return gulp.src(['node_modules/bootstrap/css/bootstrap.css', 'src/css/*.css'])
       
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('serve', function(){
    browserSync.init({
        server: "./src"
    });
gulp.watch(['src/*.html']).on('change',browserSync,reload);

});

gulp.task('default',['js','serve']);