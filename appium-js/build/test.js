'use strict';

// Utilities:
var gulp = require('gulp');


// Dependencies:
var babel = require('babel-core/register');
var mocha = require('gulp-mocha');

module.exports = {
    //startserver: startserver,
    runtest: runtest
};

function runtest (reportTaskDone) {
    gulp.src([
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

function startserver (reportTaskDone) {


}
