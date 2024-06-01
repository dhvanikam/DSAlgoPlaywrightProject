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
    }

    async waitForPageLoad(){
        //await this.page.waitForLoadState('networkidle'); 
        await page.waitForTimeout(
            10000);
    }

    /*
    async getPageTitle(){
        return await this.page.title();
    }*/

    /*********** Link action methods *****************/

    async clickRegisterLink(){
        await this.registerLink.click();
        waitForPageLoad();    
    }

    async clickSignInLink(){
        await this.signInLink.click();
        waitForPageLoad();        
    }

    /*********** Module methods *****************/

    async clickGetStartedO_DataStructure(){
        await this.dsIntroBtn.click();
        waitForPageLoad();        
    }

    async clickGetStartedO_Array(){
        await this.arrayBtn.click();
        waitForPageLoad();             
    }

    async clickGetStartedOfLinkedList(){
        await this.linkedListBtn.click();
        waitForPageLoad();
    }
    async clickGetStartedOfStack(){
        await this.stackBtn.click();
        waitForPageLoad();
    }
    async clickGetStartedOfQueue(){
        await this.queueBtn.click();
        waitForPageLoad();
    }
    async clickGetStartedOfTree(){
        await this.treeBtn.click();
        waitForPageLoad();
    }
    async clickGetStartedOfGraph(){
        await this.graphBtn.click();
        waitForPageLoad();
    }

}

module.exports = {HomePage};