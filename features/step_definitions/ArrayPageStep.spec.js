const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');

//Background
When('User clicks get started for array after entering valid credential', async function () {
    this.loginPage = await this.homePage.clickSignInLink();
    this.homePage = await this.loginPage.validLogin("testuser@gmail.com", "R5h^w&Um3z5HPL");
    this.arrayPage = await this.homePage.clickGetStartedOf_Array();
});

//@arrays-links
Given('User is on {string} page after logged in', async function (pageTitle) {
    console.log(await this.page.title());
});

When('User clicks on {string}', async function (linkName) {
    await this.arrayPage.clickOnLink(linkName);
});

Then('User should be navigate to {string} page', async function (pageName) {
    await expect(this.page).toHaveTitle(pageName);
});

//@arrays-practiceQuetionsLink
When('User click the practice question button from {string} page', async function (linkName) {
    await this.arrayPage.clickOnLink(linkName);
    await this.arrayPage.clickOnLink("/array/practice");
});

Then('User should be navigate to a page having {string}', async function (pageTitle) {
    await expect(this.page).toHaveTitle(pageTitle);
});
//@arrays-tryeditor
When('User click the Try here button from {string} page', async function (linkName) {
    await this.arrayPage.clickOnLink(linkName);
    await this.arrayPage.clickTryButton();
});
Then('User should be navigate to a page having an tryEditor with a Run button to test', async function () {
    await expect(this.page).toHaveTitle("Assessment");
});

//@arrays-tryeditor-validcode
When('User clicks the run button after entering {string} in tryEditor', async function (code) {
    console.log(code)
    await this.arrayPage.enterCode(code);
    await this.arrayPage.clickRunButton();
});

Then('User should be presented with Run result as {string}', async function (result) {
    expect(await this.arrayPage.getResult()).toContain(result);
});

//@arrays-tryeditor-invalidcode
Then('User should be presented with error message as {string}', async function (errorMessage) {
    expect(await this.arrayPage.getErrorMsg()).toContain(errorMessage);
});

//@arrays-practice-questionsLinks
When('User click the Practice Questions from {string} page', async function (string) {
    await this.arrayPage.clickOnLink("arrays-in-python");
    await this.arrayPage.clickOnLink("/array/practice");
});

//@arrays-practice-question1-run
When('User click the {string} from practice question page', async function (linkName) {
    await this.arrayPage.clickOnLink("arrays-in-python");
    await this.arrayPage.clickOnLink("/array/practice");
    await this.arrayPage.clickOnLink(linkName);
});

When('User click on {string} page', async function (linkName) {
    await this.arrayPage.clickOnLink(linkName);
});

Then('User should be navigate to a page having an question with a Run button and submit button to test', async function () {
    await expect(this.page).toHaveTitle("Assessment");
});

When('User clicks the run button after entering code in tryEditor', async function (docString) {
    await this.arrayPage.clearCodeFromEditor();
    await this.arrayPage.enterCode(docString);
    await this.arrayPage.clickRunButton();
});

// @arrays-practice-question1-submit
When('User clicks the submit button after entering code in tryEditor', async function (docString) {
    await this.arrayPage.clearCodeFromEditor();
    await this.arrayPage.enterCode(docString);

});
Then('User should be presented with Submit result as {string}', async function (result) {
    await this.arrayPage.clickSubmitButton();
    expect(await this.arrayPage.getResult()).toContain(result);
});

//@arrays-practice-question1-run-fail [Reused Steps]
//@arrays-practice-question2-run-excel
// When('User clicks the run button after entering code from {string} in tryEditor', async function (sheetName) {
//     await this.arrayPage.clearCodeFromEditor();
//     await this.arrayPage.enterCodefromExcel(sheetName);
//     await this.arrayPage.clickRunButton();
// });
When('User clicks the run button after entering code in tryEditor from row {string} of sheet {string}', async function (rownum, sheetName) {
    await this.arrayPage.clearCodeFromEditor();
    await this.arrayPage.enterCodefromExcel(sheetName,rownum);
    await this.arrayPage.clickRunButton();
  });

Then('User should be presented with Run result from row {string} of sheet {string}', async function (rownum, sheetName) {
    const result = await this.arrayPage.getExpectedResultFromExcel(sheetName,rownum);
    expect(await this.arrayPage.getResult()).toContain(result);
  });