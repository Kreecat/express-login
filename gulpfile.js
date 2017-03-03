var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

//watch task listen for saves on specfic files, then runs the task you want to run
gulp.task('watch', function(){
	//first arugment is an array of files to watch
	//second arugment an array of tasks to run
	//* tells gulp to watch any file with .less extension
	gulp.watch(['./server/public/styles/*.less'], ['compile-less'])
})


gulp.task('compile-less', function(){
	// ./ starts you at the same level of where you are
	gulp.src('./server/public/styles/*.less')
	.pipe(less())
	.pipe(gulp.dest('./server/public/styles/'))
})
//default task we are not making uo the default name
//second arg is an arry of tasks to be done
gulp.task('default', ['compile-less', 'watch'])