'use strict';

var drawer = require('../../screens/menudrawer.screen');

describe('test suite:', () => {
    describe('test suite test:', () => {

        beforeEach(()=> {
            this.driver = driverProvider.driver(desiredCap);   
        })

        it('test1', (done) => {
            console.log(' print test1 ');
            this.driver.elementByClassName('Home').click(done);
            //drawer.navigateToHomeScreen();
        });

        it('test2', () => {
            console.log(' print test2 ');
        });
    });
});