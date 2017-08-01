"use strict";
//var Page = require('./page')
class HomeScreen {
    get menu_button()  { return this.driver.findElement(By.xpath("//android.widget.ImageButton[@text='Open navigation drawer']")); }
    get favourite()    { return this.driver.findElement(By.id("wishListFAB")); }
    get select_fab()   { return this.driver.findElement(By.id("selectFAB")); }
    get home_nav()     { return this.driver.findElement(By.id("icon")); }
    
    open() {
        super.open('login');
    }
    
    submit() {
        this.form.submitForm();
    }
    
}
module.exports = new HomeScreen();