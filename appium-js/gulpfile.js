'use strict';
// Register:
var babel = require('babel-core/register');

var gulp = require('gulp');
var test = require('./build/test');


gulp.task('test', test.runtest);
