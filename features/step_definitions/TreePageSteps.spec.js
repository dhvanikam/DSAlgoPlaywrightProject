const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

//Background Scenario
When('User clicks get started for tree after entering valid credential', async function () 
{
  this.loginPage=await this.homePage.clickSignInLink();
  this.homePage=await this.loginPage.validLogin("TestUser", "Pass@123");
  this.treePage=await this.homePage.clickGetStartedOf_Tree();
});

When('User clicks on tree {string}', async function (linkName) {
    await this.treePage.clickOnLink(linkName);
});

When('User click the Try here button for Tree page from {string} page', async function (linkName)
{
  await this.treePage.clickOnLink(linkName);
  await this.treePage.clickTryButton();
});

//Enter Python Code
When('User clicks the run button after entering {string} in tryEditor for Tree page', async function (code)
{
  await this.treePage.enterCode(code);
  await this.treePage.clickRunButton();
});

//Valid Output
Then('User should be presented with Run result as {string} in Tree page', async function (result)
{
  expect(await this.treePage.getResult()).toContain(result);
});

//Invalid Output
Then('User should be presented with error message as {string} in Tree page', async function (errorMessage) 
{
  expect(await this.treePage.getErrorMsg()).toContain(errorMessage);
});

When('User clicks Practice Questions after reaching to Implementation of BST Page', async function () 
{
  await this.treePage.clickTreeBSTLink();
  await this.treePage.clickPracticeQuestion();
});
