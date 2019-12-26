var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat      = require('gulp-concat'),
    minify      = require('gulp-minify');

function styles() {
    return gulp.src('src/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest('public/'))
}

gulp.task('styles', styles);

gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', styles);
});

gulp.task('bundle', function() {
    return gulp.src('public/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(minify())
        .pipe(gulp.dest('./public/bundle/'));
});

gulp.task('default', function() {
    gulp.series('styles');
});
