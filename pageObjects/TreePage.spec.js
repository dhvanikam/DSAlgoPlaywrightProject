class TreePage
{
    constructor(page)
    {
        this.page = page;
        this.dropDown = page.getByRole('link', { name: 'Data Structures' });
        this.treeLink = page.locator("a[href='/tree']");
        this.tryEditorLink = page.locator("a[href='/tryEditor']");
        this.textEditor = page.locator("//textarea[@tabindex='0']");
        this.runButton = page.getByRole("button",{name: "Run"});
        this.textOutput=page.locator("[id='output']");
        this.treeBST = page.locator("//a[@href='implementation-of-bst']");
        this.practiceQuestion = page.locator("//a[@href='/tree/practice']");
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

     async clickTreeBSTLink()
    {
        await this.treeBST.click();
    }

    async clickPracticeQuestion()
    {
        await this.practiceQuestion.click();
    }

   

}
module.exports = {TreePage};