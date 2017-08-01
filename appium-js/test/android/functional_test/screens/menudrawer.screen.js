"use strict";
//var Page = require('./page')
var wd  = require('wd');
import driver from '../../../../utils/driver-provider'



class MenuDrawerScreen {
    constructor () {
        this.driver = driver;
    }

    get home_screen_nav() { return driver.elementByName("Home"); }
    get favourite_screen_nav() { return this.driver.elementsByName("Favorites"); }
    get history_screen_nav()   { return this.driver.elementsByName("History"); }
    get add_garment_nav()      { return this.driver.elementsByName("Add clothes to list"); }
    get remove_garment_nav()   { return this.driver.elementsByName("Add clothes to list"); }
    
    navigateToHomeScreen () {
        this.home_screen_nav().click();
    }

}
module.exports = new MenuDrawerScreen();