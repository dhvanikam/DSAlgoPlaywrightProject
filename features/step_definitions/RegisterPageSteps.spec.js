
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const {POManager} = require('../../pageObjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../../utils/RegisterValidTestData.json')));
const excel = require('../../utils/ExcelReaderUtil.spec');
const util = require('../../utils/util.spec');

//########################################### Register With Valid Data from JSON File ############################################################

  When('User logs in with valid credentials from {string}', async function (datasetNumber) {
    
    const username = dataset[datasetNumber-1].username
    const password = dataset[datasetNumber-1].password
    const confirmpassword = dataset[datasetNumber-1].confirmpassword

    this.homePage = await this.registerPage.registerWithValidCredentials(username, password, confirmpassword);
  });


  Then('User navigate to the home page with a message {string}', async function (string) {
  
    expect(await this.registerPage.successRegister()).toHaveText("New Account Created");
    
  });

  //########################################### Empty Fields ##############################################################

  When('User click Register with all empty field in {string}, {string} and {string}', async function (username, password, confirmpassword) {
    //this.registerPage = await this.pomanager.getRegisterPage();
    await this.registerPage.clickRegisterWithEmptyFields(username, password, confirmpassword);
  });

  Then('It should display an error {string} below username textbox', async function (expectedErrString) {
    expect(await this.registerPage.errorMsg("username")).toContain(expectedErrString);
  });


//########################################### Register with Username and other Fields Empty  ##############################################################

  When('The user clicks Register button after entering username with other fields empty', async function (dataTable) {
    
    let errMsg=[];

    let table = dataTable.rows();

    for(const data of table){

      const username = data[0];
      console.log(username)

  
      await this.registerPage.clickRegisterWithEmptyFields (username, "", "");
      errMsg.push(await this.registerPage.errorMsg("Username"));
    }
    console.log("number of err msgs received = " + errMsg.length)
    this.errMsgArr=errMsg;

  });

  Then('It should display an error {string} below password textbox', function (expectedErrMsg) {

    console.log("Inside then. Printing this.errMsgArr = " + this.errMsgArr)
    //expect(util.checkActualEveryErrMsgToEquate(this.errMsgArr,expectedErrMsg)).toBeTruthy();

  });

  //########################################### Invalid Credentials - Data from Excel ##############################################################

  
  When('user enters invalid credentials in the sheetname {string} and row number {int}', {timeout: 100000}, async function (sheetName, rowNum) {
    //ExcelReaderUtil excelReaderUtil = new ExcelReaderUtil();
    let data = await excel.getRegistrationData(sheetName,rowNum);
    console.log(data)
    this.actualErrMsgArray=[];
    this.actualErrMsgArray.push(await this.registerPage.clickRegisterWithInvalidCredentials(data[0].username, data[0].password, data[0].confirmpassword));      

  });

  
  When('user enters invalid credentials in the sheetname {string}', {timeout: 100000}, async function (sheetName) {
    
    let dataSet = await excel.getRegistrationData(sheetName, null);
    console.log(dataSet)
    const x = [];
    
    for(const data of dataSet){
      let actualErrText = await this.registerPage.clickRegisterWithInvalidCredentials(data.username, data.password, data.confirmpassword);      
      
      x.push(await actualErrText);

    }
    this.actualErrMsgArray = x;
    console.log(this.actualErrMsgArray)

  })

  Then('User verifies for the mismatch error message {string}', function (expectedErrMsg) {

    expect(util.checkActualEveryErrMsgToEquate(this.actualErrMsgArray,expectedErrMsg)).toBeTruthy();

  });

  