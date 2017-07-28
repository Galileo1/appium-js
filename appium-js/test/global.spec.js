'use strict';

afterEach(() => {
    console.log("after each");
});


beforeEach(() => {
    console.log("before each");
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
