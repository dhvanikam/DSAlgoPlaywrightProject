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
    
    this.page.goto("https://dsportalapp.herokuapp.com/home");
    this.homePage = this.pomanager.getHomePage(); 

  });

  Then('User lands on home page', async function () {

    //validate title
    await expect(this.page).toHaveTitle('NumpyNinja'); 
    //Note: need to put this contant in some other class --> later
  });

  When('User sees SignIn link', function () {
    // non functional -->later
  });

  When('User clicks on SignIn link', function () {
    this.homePage.clickSignInLink();    
  });

  When('User clicks on SignIn link on Home Page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
 

  When('User sees Registration link', function () {
    // non functional -->later
  });

  When('User clicks on Registration link', function () {
    this.homePage.clickRegisterLink();
  });

  Then('User lands on Registration Page', function () {
    console.log("to be verified by Julie");
  });