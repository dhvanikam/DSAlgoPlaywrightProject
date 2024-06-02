class HomePage{

    constructor(page){
        this.page = page;
        this.textLogo = page.locator(".navbar-brand");
        this.registerLink = page.locator("//a[normalize-space()='Register']");
        this.signInLink = page.locator("//a[normalize-space()='Sign in']");
        this.dsIntroBtn = page.locator("//a[@href='data-structures-introduction']");
        this.arrayBtn = page.locator("//a[@href='array']");
        this.linkedListBtn = page.locator("a[href='linked-list']");
        this.stackBtn = page.locator("a[href='stack']");
        this.queueBtn = page.locator("a[href='queue']");
        this.treeBtn = page.locator("a[href='tree']");
        this.graphBtn = page.locator("a[href='graph']");
        this.signOut = page.locator("a[href='/logout']");
    }

    /*********** Link action methods *****************/

    async isRegisterLinkVisible(){
        return await this.registerLink.isVisible();
    }

    async clickRegisterLink(){
        await this.registerLink.click();
    }

    async isSignInLinkVisible(){
        return await this.signInLink.isVisible();
    }

    async clickSignInLink(){
        await this.signInLink.click();
    }

    async isSignOutLinkVisible(){
        return await this.signOut.isVisible();
    }

    async clickSignOutLink(){
        await this.signOut.click();
    }
    
    

    /*********** Module methods *****************/

    async clickGetStartedOf_DataStructure(){
        await this.dsIntroBtn.click();
    }

    async clickGetStartedOf_Array(){
        await this.arrayBtn.click();
    }

    async clickGetStartedOf_LinkedList(){
        await this.linkedListBtn.click();
    }
    async clickGetStartedOf_Stack(){
        await this.stackBtn.click();
    }
    async clickGetStartedOf_Queue(){
        await this.queueBtn.click();
    }
    async clickGetStartedOf_Tree(){
        await this.treeBtn.click();
    }
    async clickGetStartedOf_Graph(){
        await this.graphBtn.click();
    }

}

module.exports = {HomePage};