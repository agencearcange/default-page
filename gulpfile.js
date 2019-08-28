'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var workingDir = '_src';

function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins, workingDir);
}

gulp.task('sass', getTask('sass'));

gulp.task('default', ['sass'], function () {
    gulp.watch(workingDir + '/sass/{,*/**/}*.{sass,scss}', ['sass']);
});
