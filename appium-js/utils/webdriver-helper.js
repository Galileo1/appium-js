'use strict';

// Constants:
import constants from '../constants.js';

// Utilities:
import Promise from 'bluebird';
//const fs = Promise.promisifyAll(require('graceful-fs'));
// import log from 'npmlog';
// import { join } from 'path';

export default {
    waitById: waitForElementById
};

function waitForElementById (id) {
   return driver.waitForElementById(id, asserters.isDisplayed, constants.ASSERTER_TIMEOUT, constants.ASSETER_POLL_FREQ)
    .then((element) => { return element })
    .catch((error) => console.log(error));
}


