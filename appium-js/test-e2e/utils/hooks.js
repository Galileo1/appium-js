'use strict';

var setup = require('./setup');
var Promise = require('bluebird');


export default {
       before: before,
        after: after,
    afterEach: afterEach 
};

function before (extraCapabilities) {
    return function () {
        let desired = setup.getDesiredCapabilities(extraCaps);
        this.allPassed = true;
        this.driver = setup.getDriver(desired);
    }
}

// after each test, re-evaluate whether the whole thing passed or failed
function afterEach () {
  this.allPassed = this.allPassed && (this.currentTest.state === 'passed');
}

// after all the tests, quit and update Sauce (if necessary)
function after () { 
    this.driver.quit();
}
