const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');


Given('User is on the DsAlgo portal URL', async function () {
    await this.page.goto("https://dsportalapp.herokuapp.com/home");

});
When('User clicks get started for array after entering valid credential', async function () {
    this.loginPage=await this.homePage.clickSignInLink();
    this.homePage=await this.loginPage.validLogin("testuser@gmail.com", "R5h^w&Um3z5HPL");
    this.arrayPage=await this.homePage.clickGetStartedOf_Array();
});

Given('User is on {string} page after logged in', async function (pageTitle) {
   console.log(await this.page.title());
});

When('User clicks on {string}', async function (linkName) {
    await this.arrayPage.clickOnLink(linkName);
});

Then('User should be navigate to {string} page', async function (pageName) {
    await expect(this.page).toHaveTitle(pageName);
});

When('User click the Try here button from {string} page', async function (linkName) {
    await this.arrayPage.clickOnLink(linkName);
    await this.arrayPage.clickTryButton();
});
Then('User should be navigate to a page having an tryEditor with a Run button to test', async function () {
    await expect(this.page).toHaveTitle("Assessment");
});

When('User clicks the run button after entering {string} in tryEditor', async function (code) {
    await this.arrayPage.enterCode(code);
    await this.arrayPage.clickRunButton();
});

Then('User should be presented with Run result as {string}', async function (result) {
    expect(await this.arrayPage.getResult()).toContain(result);
});

//Arrays in Python link
When('User clicks Arrays in Python link', async function () {
    //this.arrayPage = await this.pomanager.getArrayPage();
    await this.arrayPage.clickOnLink();
});

Then('User should be presented with error message as {string}', async function (errorMessage) {
    expect(await this.arrayPage.getErrorMsg()).toContain(errorMessage);
});