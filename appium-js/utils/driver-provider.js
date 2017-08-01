'use strict';


// Dependencies:
const server = require('./server-config');

// Utilities:
var wd = require('wd');
import Promise from 'bluebird';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
require('colors');

// export default class Driver {
//     constructor (desiredCap) {
//        this.desiredCap = desiredCap;
//        this.driver = null;
//     }

//     set driver (newDesiredCap) {
//         this.desiredCap = newDesiredCap;
//         this.driver = wd.promiseChainRemote(server.local);
//         this.driver.on('status', (info) => { console.log(info.cyan); });
//         this.driver.on('command', (method, path, data) => {
//             console.log(' > ' + method.yellow, path.grey, data || '');
//         });
//         this.driver.on('http', (method, path, data) => {
//             console.log(' > ' + method.magenta, path, (data || '').grey);
//         });  
//         this.driver.init(this.desiredCap);
//     }

//     get driver () {
//         return this.driver;
//     }

// }

export default {
    driver : getDriver
}

// (function customGlobs () {
//     let customGlob = function customGlob () {
//         chai.use(chaiAsPromised);
//         global.should = chai.should();
//         global.expect = chai.expect;
//         global.assert = chai.assert;
//         global.Promise = Promise;
//         chaiAsPromised.transferPromiseness = wd.transferPromiseness;
//     };

//     return customGlob;

// })();

function getDriver (desiredCap, done) {
    let driver = wd.promiseChainRemote(server.local);
    driver.on('status', (info) => { console.log(info.cyan); });
    driver.on('command', (method, path, data) => {
        console.log(' > ' + method.yellow, path.grey, data || '');
    });
    driver.on('http', (method, path, data) => {
        console.log(' > ' + method.magenta, path, (data || '').grey);
    });      
    
    // TO DO redo this part the promise is not getting resolved 
    driver.init(desiredCap).nodeify(done);
    // .then (() => { console.log("driver initialization successful"); })
    // .catch (() => { console.log ("driver initialization failed."); });
    return driver;    
}


