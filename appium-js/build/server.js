'use strict';

// Utilities:
const gulp = require('gulp');
const { spawn } = require('child_process');
const childProcess = Promise.promisifyAll(require('child_process'));
import Promise from 'bluebird';
import { join } from 'path';
// Constants;
import constants from '../constants';

// Dependencies:
//const babel = require('babel-register');
const mocha = require('gulp-mocha');

module.exports = {    
    start: start,
    doctor: doctor
};

function start () {
    //spawn(constants.APPIUM_START_COMMAND, { stdio: 'inherit' });
    // childProcess.exec(constants.APPIUM_START_COMMAND, (stdout,stderr) => {
    //     console.log(stdout);
    //     console.log(stderr);
    // });
   

    
    // .on('end', reportTaskDone);   
    // exec(constants.APPIUM_START_COMMAND, function (err, stdout, stderr) {
    //     console.log(stdout);
    //     console.log(stderr);   
    // }).on('end', reportTaskDone);  

    // let task = spawn(constants.APPIUM_START_COMMAND, { stdio: 'inherit' });
    // task.on('close', (code) => {
    //     console.log('éxited with: ' + code );
    //     callback(code);
    // });

    //spawn('node', [join('node_modules', 'appium', 'build', 'lib', 'main')], { stdio: 'inherit' });
   spawn('node', [constants.APPIUM_START_COMMAND], { stdio: 'inherit' });
} 

function doctor () {
     spawn('node', [constants.APPIUM_DOCTOR_COMMAND], { stdio: 'inherit' });
}

function startAppium () {    
    childProcess.execAsync(constants.APPIUM_START_COMMAND2);
    //.then(() => log.verbose('Selenium setup complete.'));
}




