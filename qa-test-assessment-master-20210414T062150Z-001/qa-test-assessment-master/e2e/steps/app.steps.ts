//import { Console } from "console";

const { Given, When,Then} = require('cucumber');
const { browser, by, element } = require('protractor');
const chai = require('chai');

chai.use(require('chai-as-promised'));


/**
 * This method will perform below steps 
 * Chrome Browser is opened with URL `http://localhost:4200/` 
 * 
 */
Given('The app is open on {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
    browser.manage().window().maximize(); //Maximise window command
    await chai.expect(browser.element(by.tagName('h1')).isDisplayed()).to.eventually.be.true;
    const title= await browser.element(by.tagName('h1')).getText();
    console.log(title);
});

/**
 * This method will perform below step
 * select People radio button
 * 
 */
When('user click on people option', { timeout: 25 * 1000 }, async function() {
    await chai.expect(browser.element(by.xpath('//label[text()=" People "]')).isDisplayed()).to.eventually.be.true;
     await browser.element(by.xpath('//label[text()=" People "]')).click();
 //    await chai.expect(browser.element(by.id('people')).isSelected().to.eventually.be.true);   
     console.log("People Radio button is selected ");
     
});

/**
 * This method will perform below step
 * select Planets radio button
 * 
 */
 When('user click on planets option', { timeout: 25 * 1000 }, async function() {
    await chai.expect(browser.element(by.xpath('//label[text()=" Planets "]')).isDisplayed()).to.eventually.be.true;
     await browser.element(by.xpath('//label[text()=" Planets "]')).click();
    console.log("Planets Radio button is selected ");
     
});


/**
 * This method will perform below step
 * Enter the text in search bar 
 * User is able to enter different string and accomplish the data driven test with different data
 * 
 */
When('user seach for {string} in searchBar', { timeout: 25 * 1000 }, async (string) => {
    await browser.sleep(5000);
    await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
          browser.element(by.id('query')).sendKeys(string);
    await browser.sleep(4000);
    await browser.element(by.xpath("//button[text()='Search']")).click();

});

/**
 * This method will perform below step
 *  select the Search button
 * 
 */
When('user click on search', { timeout: 25 * 1000 }, async()=>{
    await browser.element(by.xpath("//button[text()='Search']")).click();
    console.log("User clicked on search");

});

/**
 * This method will perform below step
 * verifies if search result is displayed to user or not 
 * Search result for people or planet can be verified
 */

Then ('user is displayed with {string} results', { timeout: 25 * 1000 }, async (string) => {
    await browser.sleep(4000);
    await chai.expect(browser.element(by.xpath('//div[@class="card-body"]/h6')).isDisplayed()).to.eventually.be.true;
    const SearchResult= await browser.element(by.xpath('//div[@class="card-body"]/h6')).getText();
    console.log('User search for '+string+' : '+SearchResult);
    await browser.sleep(4000);

});

/**
 * This method will perform below step
 * verifies if multiple search result is displayed to user or not 
 * Multiple Search result for people or planet can be verified
 */

 Then ('user is displayed with multiple results', { timeout: 25 * 1000 }, async () => {
    await browser.sleep(4000);
    await chai.expect(browser.element(by.xpath('//h6')).isDisplayed()).to.eventually.be.true;
    const SearchResult= await element.all(by.xpath('//h6')).count();
    console.log('Total search result displayed '+SearchResult);
    await browser.sleep(4000);

});

/**
 * This method will perform below step
 * Verifies for count of result displayed
 */

 When ('user verifies results', { timeout: 25 * 1000 }, async () => {
    await browser.sleep(4000);
    await chai.expect(browser.element(by.xpath('//h6')).isDisplayed()).to.eventually.be.true;
    const SearchResult= await element.all(by.xpath('//h6')).count();
    console.log('Total search result displayed '+SearchResult);
    await browser.sleep(4000);

});

/**
 * This method will perform below step
 * Clearing the search bar
 */

 When ('User clear the searchBar', { timeout: 25 * 1000 }, async () => {
    await browser.sleep(5000);
    await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
          browser.element(by.id('query')).clear();
   console.log('User cleared the searchBar');

});


/**
 * This method will perform below step
 * Method to verify the Empty sheet on clearing result
 */

 Then ('User verify empty result', { timeout: 25 * 1000 }, async () => {
    await browser.sleep(3000);
  await chai.expect(browser.element(by.xpath('(//h6)[1]')).isDisplayed()).to.eventually.be.true;
    console.log('Still Results are displayed : Step failed ');

});

/**
 * This method will perform below step
 * Verifies the Gender result of  person and displays the gender of person in console
 */


Then ('Result displays Gender for {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.sleep(4000);
    await chai.expect(browser.element(by.xpath('//div[text()="Gender:"]')).isDisplayed()).to.eventually.be.true;
    console.log('Gender tag is displayed')
    await chai.expect(browser.element(by.xpath('//div[text()="Gender:"]//parent::div/div[2]')).isDisplayed()).to.eventually.be.true;
    const genderResult= await browser.element(by.xpath('//div[text()="Gender:"]//parent::div/div[2]')).getText();
    console.log('Gender of '+ string+ '  : '+genderResult);

});

/**
 * This method will perform below step
 * Verifies the Birth year result of  person and displays the Birth year of person in console
 */

Then ('Result displays Birth year for {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.sleep(2000);
    await chai.expect(browser.element(by.xpath('//div[text()="Birth year:"]')).isDisplayed()).to.eventually.be.true;
    console.log('Birth year tag is displayed')
    await chai.expect(browser.element(by.xpath('//div[text()="Birth year:"]//parent::div/div[2]')).isDisplayed()).to.eventually.be.true;
    const birthResult= await browser.element(by.xpath('//div[text()="Birth year:"]//parent::div/div[2]')).getText();
    console.log('Birth year of '+ string+ '  : '+birthResult);
});

/**
 * This method will perform below step
 * Verifies the Eye color result of  person and displays the  eye color of person in  console
 */

Then ('Result displays Eye color for {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.sleep(2000);
    await chai.expect(browser.element(by.xpath('//div[text()="Eye color:"]')).isDisplayed()).to.eventually.be.true;
    console.log('Eye Color tag is displayed')
    await chai.expect(browser.element(by.xpath('//div[text()="Eye color:"]//parent::div/div[2]')).isDisplayed()).to.eventually.be.true;
    const eyeResult= await browser.element(by.xpath('//div[text()="Eye color:"]//parent::div/div[2]')).getText();
    console.log('Eye color of '+ string+ '  : '+eyeResult);
});

/**
 * This method will perform below step
 * Verifies the Skin color  result of  person and displays the  skin color of person in console
 */


Then ('Result displays Skin color for {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.sleep(2000);
    await chai.expect(browser.element(by.xpath('//div[text()="Skin color:"]')).isDisplayed()).to.eventually.be.true;
    console.log('Skin color tag is displayed')
    await chai.expect(browser.element(by.xpath('//div[text()="Skin color:"]//parent::div/div[2]')).isDisplayed()).to.eventually.be.true;
    const skinResult= await browser.element(by.xpath('//div[text()="Skin color:"]//parent::div/div[2]')).getText();
    console.log('Skin color of '+ string+ '  : '+skinResult);
});

/**
 * This method will perform below step
 * Verifies the population result of  person and displays the population of planet in console
 */


 Then ('Result displays Population for {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.sleep(2000);
    await chai.expect(browser.element(by.xpath('//div[text()="Population:"]')).isDisplayed()).to.eventually.be.true;
    console.log('Population tag is displayed')
    await chai.expect(browser.element(by.xpath('//div[text()="Population:"]//parent::div/div[2]')).isDisplayed()).to.eventually.be.true;
    const popResult= await browser.element(by.xpath('//div[text()="Population:"]//parent::div/div[2]')).getText();
    console.log('Population of '+ string+ '  : '+popResult);
});

/**
 * This method will perform below step
 * Verifies the climate result of  person and displays the climate of planet in console
 */


 Then ('Result displays Climate for {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.sleep(2000);
    await chai.expect(browser.element(by.xpath('//div[text()="Climate:"]')).isDisplayed()).to.eventually.be.true;
    console.log('climate tag is displayed')
    await chai.expect(browser.element(by.xpath('//div[text()="Climate:"]//parent::div/div[2]')).isDisplayed()).to.eventually.be.true;
    const climateResult= await browser.element(by.xpath('//div[text()="Climate:"]//parent::div/div[2]')).getText();
    console.log('climate of '+ string+ '  : '+climateResult);
});

/**
 * This method will perform below step
 * Verifies the Gravity result of  person and displays the Gravity of planet in console
 */


 Then ('Result displays Gravity for {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.sleep(2000);
    await chai.expect(browser.element(by.xpath('//div[text()="Gravity:"]')).isDisplayed()).to.eventually.be.true;
    console.log('Gravity tag is displayed')
    await chai.expect(browser.element(by.xpath('//div[text()="Gravity:"]//parent::div/div[2]')).isDisplayed()).to.eventually.be.true;
    const gravityResult= await browser.element(by.xpath('//div[text()="Gravity:"]//parent::div/div[2]')).getText();
    console.log('Gravity of '+ string+ '  : '+gravityResult);
});




/**
 * This method will perform below step
 * Verifies no data is displayed to user
 */

 Then ('No search result displayed', { timeout: 25 * 1000 }, async () => {
    await browser.sleep(2000);
    await chai.expect(browser.element(by.xpath('//*[text()="Not found."]')).isDisplayed()).to.eventually.be.true;
    const searchResult= await browser.element(by.xpath('//*[text()="Not found."]')).getText();
    console.log('No search result is displayed'+searchResult)
  
});

/**
 * This method will perform below step
 * verifies the Enter key funtionality for seaching results
 */

 Then ('User press Enter key', { timeout: 25 * 1000 }, async () => {
    await browser.sleep(2000);
    element(by.xpath("//button[text()='Search']")).click();
    console.log("User clicked on search");
  
});

