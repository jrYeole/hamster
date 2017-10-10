//gulp file by prajkty for batch file

var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var prompt = require('gulp-prompt');

var src = '';
var dist = '';

gulp.task('hello', function () {
    console.log('Hello world');
});

gulp.task('sass', function () {
    return gulp.src(src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dist))
});

//scss watch
gulp.task('watchscss', ['sass'], function () {
    gulp.watch(src);
});

gulp.task('compile', function () {
    let tasks
    return gulp.src('')
        .pipe(prompt.prompt([{
            type: 'input',
            name: 'src',
            message: 'Enter the path of the scss file'
        },
        {
            type: 'input',
            name: 'dist',
            message: 'Enter the destination path of the scss file'
        }],
         function (res) {
            src = res.src;
            dist = res.dist;
        }));
});

gulp.task('build', function () {
    runSequence('compile', ['watchscss'])
});