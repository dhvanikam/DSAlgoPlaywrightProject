const { expect } = require('@playwright/test');
class QueuePage
{
    constructor(page)
    {
        this.page = page;
        
        this.dropDown = page.getByRole('link', { name: 'Data Structures' });
        this.queueLink = page.locator("a[href='/queue']");
        this.queuePhyton = page.locator("//a[@href='implementation-lists']");
        this.queueCollection = page.locator("//a[@href='implementation-collections']");
        this.queueArray = page.locator("//a[@href='Implementation-array']");
        this.queueOperation = page.locator("//a[@href='QueueOp']");
        this.practiceQuestion = page.locator("//a[@href='/queue/practice']");

        this.tryEditorLink = page.locator("a[href='/tryEditor']");
        this.textEditor = page.locator("//textarea[@tabindex='0']");
        this.runButton = page.getByRole("button",{name: "Run"});
        this.textOutput=page.locator("[id='output']");
    }

    async clickOnLink(linkName)
    {
        await this.page.locator(`[href="${linkName}"]`).click();
    }

    async clickTryButton()
    {
        await this.tryEditorLink.click();
    }

    async enterCode(code)
    {
        console.log(code);
        //await this.tryEditorTextarea.waitFor();
        await this.page.waitForLoadState('networkidle');
        await this.textEditor.fill(code);
    }

    async clickRunButton()
    {
        await this.runButton.click();
    }

    async getResult()
    {
        const result = await this.textOutput.textContent();
        return result;
    }
 
     async getErrorMsg()
     {
         let errormsg;
         await this.page.on('dialog', async dialog => {
             errormsg=dialog.message();
             console.log(errormsg);
             dialog.accept();
         });
         await this.runButton.waitFor();
         await this.runButton.click();
         return errormsg;
    }

     async clickQueueOperationLink()
    {
        await this.queueOperation.click();
    }

    async clickPracticeQuestion()
    {
        await this.practiceQuestion.click();
    }

}
module.exports= {QueuePage};