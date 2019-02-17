const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const less = require('gulp-less');
const path = require("path");
const browserSync = require('browser-sync').create();

// Starting task
gulp.task('message', function(){
  return console.log('Gulp is running...');
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

// Compile less
gulp.task('less', function(){
  return gulp.src('./src/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css/'));
});
//serve html - would make sense to serve dist folder?
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
});

gulp.task('watch', function(){
  gulp.watch('src/img/*', ['imageMin']);
  gulp.watch('src/less/*.less', ['less']);
});

gulp.task('default', ['message', 'imageMin', 'less', 'browser-sync', 'watch']);

