'use strict';

// Utilities:
const gulp = require('gulp');
const { spawn } = require('child_process');

// Dependencies:
const babel = require('babel-core/register');
const mocha = require('gulp-mocha');

module.exports = {    
    runtest: runtest
};

function runtest (reportTaskDone) {
    gulp.src([
        'test/index.js',
        'test/**/*spec.js'      
    ])
    .pipe(mocha({compilers:babel})
        .on('error', function (error) {        
            console.log(error);
            this.destroy();
            reportTaskDone();
        })
    )
    .on('end', reportTaskDone);   
} 


