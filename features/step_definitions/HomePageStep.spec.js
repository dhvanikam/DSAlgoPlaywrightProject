const{Given, When, Then} = require('@cucumber/cucumber');
const{expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const {POManager} = require('../../pageObjects/POManager');
const config = require('../../playwright.config.js');


Given('User launches the browser',{timeout:100*1000}, async function () {
    this.browser = await playwright.chromium.launch({
        headless: false,
      });
      this.context = await this.browser.newContext();
      this.page =  await this.context.newPage();
      this.pomanager = new POManager(this.page);
  });

  When('User gives the correct DsAlgo portal URL', async function () {
    await this.page.goto(config.use.baseURL);//replace it with reading from config file
    this.homePage =await this.pomanager.getHomePage(); 
  });

  Then('User lands on home page', async function () {

    await expect(this.page).toHaveTitle('NumpyNinja'); 
    //Note: need to put this contant in some other class --> later
  });

/********************* SignIn Link Steps ******************/

  When('User sees SignIn link', async function () {
    expect(await this.homePage.isSignInLinkVisible()).toBeTruthy();
  });

  When('User clicks on SignIn link on Home Page',{timeout:100*1000}, async function () {
    await this.homePage.clickSignInLink(); 
  });

  Then('User lands on SignIn Page', async function () {
     await expect(this.page).toHaveTitle(" Login ");
  });
 
/********************* Registration Link Steps ******************/

  When('User sees Registration link', async function () {
    expect(await this.homePage.isRegisterLinkVisible()).toBeTruthy();
  });


  When('User clicks on Registration link', async function () {
    await this.homePage.clickRegisterLink();
  });

  Then('User lands on Registration Page', async function () {
    await expect(this.page).toHaveTitle(" Registration ");
  });