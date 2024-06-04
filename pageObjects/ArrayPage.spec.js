const config = require('../playwright.config.js');
const { expect } = require('@playwright/test');
class ArrayPage {
   
    constructor(page) {
        // try Let
        this.page = page;
        this.arraysInPythonLink = page.locator("[href='arrays-in-python']");
        this.arraysUsingListLink = page.locator("[href='arrays-using-list']");
        this.basicOpinListsLink = page.locator("[href='basic-operations-in-lists']");
        this.appOfArrayLink = page.locator("[href='applications-of-array']");
        //this.page.locator(`[href="${linkName}"]`) check
        this.practiceQueLink = page.locator("[href='/array/practice']");
        this.searchArrayLink = page.locator("[href='/question/1']");
        this.mostConOnesLink = page.locator("[href='/question/2']");
        this.findEvenNumLink = page.locator("[href='/question/3']");
        this.sqOfSortedArrayLink = page.locator("[href='/question/4']");
        this.tryEditorLink = page.locator('[href="/tryEditor"]');
        this.tryEditorTextarea = page.locator("//textarea[@tabindex='0']");
        this.tryEditorButton = page.locator('[type="button"]');
        this.textOutput = page.locator('[id="output"]');
        this.signOut = page.locator('[href="/logout"]');
    }

    async clickOnLink(linkName) {
        await this.page.locator(`[href="${linkName}"]`).click();
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async clickTryButton() {
        await this.tryEditorLink.click();
    }

    async enterCode(code) {
        console.log(code);
        //await this.tryEditorTextarea.waitFor();
        await this.page.waitForLoadState('networkidle');
        await this.tryEditorTextarea.fill(code);
    }

    async clickRunButton(){
        await this.tryEditorButton.click();
    }

    async getResult(){
       const result = await this.textOutput.textContent();
       return result;
    }

    async getErrorMsg(){
        let errormsg;
        await this.page.on('dialog', async dialog => {
            errormsg=dialog.message();
            console.log(errormsg);
            dialog.accept();
        });
        await this.tryEditorButton.waitFor();
        await this.tryEditorButton.click();
        return errormsg;
    }
}
module.exports = { ArrayPage };