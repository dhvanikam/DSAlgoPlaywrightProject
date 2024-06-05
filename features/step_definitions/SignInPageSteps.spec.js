
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');

//################################ Login with Valid Credentials Using DataTable ######################################################

When('User enters valid username {string} and password {string} and clicks on login button', async function (username, password) {

  this.homePage = await this.signInPage.validLogin(username, password);
});

Then('User navigates to the home page with a message {string}', async function (msg) {
       
  expect(await this.signInPage.successLogin()).toHaveText("    You are logged in");
   
});