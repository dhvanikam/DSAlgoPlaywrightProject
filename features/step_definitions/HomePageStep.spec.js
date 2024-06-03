const{Given, When, Then} = require('@cucumber/cucumber');
const{expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const {POManager} = require('../../pageObjects/POManager');
const config = require('../../playwright.config.js');
const util = require('../../utils/util.spec.js');

Given('User launches the browser', async function () {
    this.browser = await playwright.chromium.launch({
        headless: false,
      });
      this.context = await this.browser.newContext();
      this.page =  await this.context.newPage();
      this.pomanager = new POManager(this.page);
  });

  When('User gives the correct DsAlgo portal URL', async function () {
    await this.page.goto(config.use.baseURL);
    this.homePage =await this.pomanager.getHomePage(); 
  });

  Then('User lands on home page', async function () {

    await expect(this.page).toHaveTitle('NumpyNinja'); 
    //Note: need to put this contant in some other class --> later
  });

  /************* Dropdown Steps ************************/

  Then('User sees dropdown menu with {string} option selected on home page', async function (defaultOptionText) {

    expect.soft(await this.homePage.isDropDOwnVisible()).toBeTruthy();
    await expect.soft(this.homePage.getDefaultDropDownOptionEle()).toHaveText(defaultOptionText);
  });


  Then('User sees {string} options with following options:', async function (expectedMenuCount, dataTable) { 

  expect.soft(await this.homePage.getMenuOptionCount()).toBe(parseInt(expectedMenuCount));

  let tableArr = util.convertObjectArrayToStringArray(dataTable.raw());
  expect.soft(await this.homePage.getAllDropdownOptionMenuTexts()).toStrictEqual(tableArr);

  });


  Given('User clicks on dropdown menu', async function () {
    expect(await this.homePage.clickOnDropDOwn()).toBeTruthy();
  });

  When('User clicks on each of the dropdown menu', async function () {
    this.errMsgArray = await this.homePage.clickEachOptionAndGetErrMsg();
  });

  Then('User sees {string} message each time', function (expectedErrMsg) {
    
    expect(util.checkActualEveryErrMsgToEquate(this.errMsgArray,expectedErrMsg)).toBeTruthy();
  });

  /******************** Module Panel Steps ***********************/
  Then('User sees {string} panels with following panel header:', async function (expectedPanelCount, dataTable) {
   
    expect.soft(await this.homePage.getAllModuleCount()).toBe(parseInt(expectedPanelCount));

    let tableArr = util.convertObjectArrayToStringArray(dataTable.raw());
    expect.soft(await this.homePage.getAllModuleNames()).toStrictEqual(tableArr);
  });

  When('User clicks Get Started button of every topic panels', async function () {
    this.errMsgArray = await this.homePage.clickGetStartedBtnEachModuleAndGetErrMsg();
  });

  Then('User sees {string} error message each time', function (expectedErrMsg) {
    expect(util.checkActualEveryErrMsgToEquate(this.errMsgArray,expectedErrMsg)).toBeTruthy();
  });

/********************* SignIn Link Steps ******************/

  When('User sees SignIn link', async function () {
    expect(await this.homePage.isSignInLinkVisible()).toBeTruthy();
  });

  When('User clicks on SignIn link on Home Page', async function () {
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