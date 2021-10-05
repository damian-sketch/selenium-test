const {Builder,By,Key,until} = require("selenium-webdriver");
require('selenium-webdriver/chrome');

describe('Unwatch JIRA tickets', function (){
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

try{
    it('Unwatch a ticket', async function(){
        await driver.get('https://jira.devfactory.com/browse/SKYVERA-13328');
        await driver.findElement(By.id('login-form-username')).sendKeys('cedriemuuo',Key.RETURN);
        await driver.findElement(By.id('login-form-password')).sendKeys('abFD2zlrjjMAlkI6',Key.RETURN);
        await driver.findElement(By.id('login-form-submit')).click();
        await driver.findElement(By.id('watching-toggle')).click();
        await driver.quit();
    }
    )
}
catch(Exception){
    error = Exception.printStackTrace();
    console.log(error);
}

});
