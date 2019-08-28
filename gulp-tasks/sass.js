'use strict';

module.exports = function (gulp, plugins, workingDir) {

    var source = workingDir +'/sass/';
    var fs = require('fs');
    var path = require('path');

    var sassArgs = {
        outputStyle: 'compressed'
    };

    return function () {
        return gulp.src(source + '/app.scss')
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass(sassArgs).on('error', plugins.sass.logError))
            .pipe(plugins.postcss([require('postcss-flexbugs-fixes')]))
            .pipe(plugins.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest('assets/css/'));
    }
};
