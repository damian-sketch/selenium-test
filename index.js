const {Builder,By,Key,until} = require("selenium-webdriver");
require('selenium-webdriver/chrome');

describe('Test AKAN', function () {
    let driver;
   
    before(async function() {
      driver = await new Builder().forBrowser('chrome').build();
  });

try{
  it('find a akan name', async function(){
    await driver.get("https://damian-sketch.github.io/Birthday/");
    await driver.findElement(By.id('male')).click();
    await driver.findElement(By.id('YOB')).sendKeys('2000', Key.RETURN);
    await driver.findElement(By.id('MOB')).sendKeys('4', Key.RETURN);
    await driver.findElement(By.id('DOB')).sendKeys('29', Key.RETURN);
    await driver.findElement(By.id('button')).click();
    await driver.wait(until.alertIsPresent('Your Akan name is', 5000));
    // await driver.findElement(By.xpath('//button')).sendKeys(Key.RETURN);
     // close the browser after running tests
    await driver.quit();
  }
  )
}
catch(Exception){
    error = Exception.printStackTrace();
    console.log(error);
}
  // driver.quit();
})