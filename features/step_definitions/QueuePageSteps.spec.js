const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

//Background Scenario
When('User clicks get started for queue after entering valid credential', async function () 
{
  this.loginPage=await this.homePage.clickSignInLink();
  this.homePage=await this.loginPage.validLogin("TestUser", "Pass@123");
  this.queuePage=await this.homePage.clickGetStartedOf_Queue();
});

When('User clicks on queue {string}', async function (linkName) 
{
  await this.queuePage.clickOnLink(linkName);
});

When('User click the Try here button for Queue page from {string} page', async function (linkName)
{
  await this.queuePage.clickOnLink(linkName);
  await this.queuePage.clickTryButton();
});

//Enter Python Code
When('User clicks the run button after entering {string} in tryEditor for Queue page', async function (code)
{
  await this.queuePage.enterCode(code);
  await this.queuePage.clickRunButton();
});

//Valid Output
Then('User should be presented with Run result as {string} in Queue page', async function (result)
{
  expect(await this.queuePage.getResult()).toContain(result);
});

//Invalid Output
Then('User should be presented with error message as {string} in Queue page', async function (errorMessage) 
{
  expect(await this.queuePage.getErrorMsg()).toContain(errorMessage);
});

//Practice Questions
When('User clicks Practice Questions after reaching to QueueOp page', async function () 
{
  await this.queuePage.clickQueueOperationLink();
  await this.queuePage.clickPracticeQuestion();
});

Then('User is directed to Practice page', async function () 
{
  await expect(this.page).toHaveTitle("Practice Questions")
});
