'use strict';
// Register:
var babel = require('babel-core/register');

var gulp = require('gulp');
var test = require('./build/test');
var appium = require('./build/server');


gulp.task('test', test.runtest);
gulp.task('appium', appium.start);
gulp.task('doctor', appium.doctor);
