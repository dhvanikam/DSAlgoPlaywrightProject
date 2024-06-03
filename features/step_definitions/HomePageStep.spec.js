const{Given, When, Then, DataTable} = require('@cucumber/cucumber');
const{expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const {POManager} = require('../../pageObjects/POManager');
const config = require('../../playwright.config.js');


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

  //URL: https://www.aimeerivers.com/2023/03/09/data-tables-with-cucumber-js.html, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  Then('User sees {string} options with following options:', async function (expectedMenuCount, dataTable) { 
    //console.log(Array.from(dataTable.raw()[0])); -->[ 'Arrays' ]    
    //console.log(dataTable.raw()); //--> [ [Arrays],[Linked List],[Stack,Queue],[Tree],[Graph]]
    //const x = dataTable.raw().rowHash(); dataTable.rowHash();
    //console.log("dataTable type = " + typeof dataTable); //object
    //const x = dataTable.raw()
    // const keysValues = Array.from(x.values());
    // console.log("array size = " + keysValues.length);

    let strArr = [];
    const keysValues = Array.from(dataTable.raw().values());

        for(const e of keysValues){
            strArr.push(String(e));
        }
    //console.log(keysValues); //--> [ [Arrays],[Linked List],[Stack,Queue],[Tree],[Graph]]
    //console.log("keysValues type = " + typeof keysValues);
    //const firstVal = String(keysValues[0]);
    //console.log("firstVal type = " + typeof firstVal);
    //console.log(dataTable.rows()); //it treats the first item in the table as header
    //console.log("dataTable type = " + typeof x); //dataTable.rows() and dataTable.raw() = object
   
   //console.log("=======================================")
  //  const actual = await this.homePage.getAllDropdownOptionMenuTexts();
  //  console.log(actual);
  //  console.log(typeof actual[0]);
  expect.soft(await this.homePage.getMenuOptionCount()).toBe(expectedMenuCount);
    expect.soft(await this.homePage.getAllDropdownOptionMenuTexts()).toStrictEqual(strArr);

  });


  Given('User clicks on dropdown menu', async function () {
    expect(await this.homePage.clickOnDropDOwn()).toBeTruthy();
  });

  When('User clicks on each of the dropdown menu', async function () {
    this.errMsgArray = await this.homePage.clickEachOptionAndGetErrMsg();
  });

  Then('User sees {string} message each time', function (expectedErrMsg) {
    
    expect(this.homePage.checkEveryOptionEquatesToValue(this.errMsgArray,expectedErrMsg)).toBeTruthy();
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