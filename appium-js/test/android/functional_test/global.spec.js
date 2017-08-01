'use strict';
//require('babel-core/register');
// Utilities:
import ADB from 'appium-adb';

// Dependencies:
import driverProvider from '../../../utils/driver-provider';
var app = require('../../../app/app');
this.driver;

afterEach(() => {
    console.log("after each");
});

beforeEach(() => {
    console.log("before each");
    let desiredCap = {
            browserName: '',
            'appium-version': '1.6.5',
            platformName: 'Android',
            platformVersion: '5.1',
            deviceName: 'Android Real',
            app: app.androidApp
    };
    this.driver = driverProvider.driver(desiredCap);       
});


before(() => {
    console.log("before");
});

after(() => {
    console.log("after");
});

describe('global suite:', () => {
    describe('global suite test:', () => {
        it('should create print global first', () => {
            console.log('should create print first');
        });
    });
});
