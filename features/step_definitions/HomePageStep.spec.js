const{Given, When, Then} = require('@cucumber/cucumber');
const{expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const {POManager} = require('../../pageObjects/POManager');


Given('User launches the browser', async function () {
    this.browser = await playwright.chromium.launch({
        headless: false,
      });
      this.context = await this.browser.newContext();
      this.page =  await this.context.newPage();
      this.pomanager = new POManager(this.page);
  });

  When('User gives the correct DsAlgo portal URL', async function () {
    
    await this.page.goto("https://dsportalapp.herokuapp.com/home");
    this.homePage =await this.pomanager.getHomePage(); 

  });

  Then('User lands on home page', async function () {

    //validate title
    await expect(this.page).toHaveTitle('NumpyNinja'); 
    //Note: need to put this contant in some other class --> later
  });

  When('User sees SignIn link', function () {
    // non functional -->later
  });

  When('User clicks on SignIn link on Home Page', async function () {
    await this.homePage.clickSignInLink(); 
  });

  Then('User lands on SignIn Page', async function () {
     await expect(this.page).toHaveTitle(" Login ");
  });
 

  When('User sees Registration link', function () {
    // non functional -->later
  });

  When('User clicks on Registration link', async function () {
    await this.homePage.clickRegisterLink();
  });

  Then('User lands on Registration Page', function () {
    console.log("to be verified by Julie");
  });