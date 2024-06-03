
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');




  When('User enters valid username {string} and password {string} and clicks on login button', async function (username, password) {

    //this.loginPage = await this.pomanager.getLoginPage();
   // const loginPage = await this.pomanager.getLoginPage();
   this.homePage=await this.loginPage.validLogin(username, password);
  });

  Then('User navigates to the home page with a message {string}', async function (msg) {
    //const loginPage = await this.pomanager.getLoginPage();
    
    expect(await this.loginPage.successLogin()).toHaveText("    You are logged in");
    //await expect(this.page).toHaveText("    You are logged in");


  });