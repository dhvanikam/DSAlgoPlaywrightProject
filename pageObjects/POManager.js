const {HomePage} = require('./HomePage.spec');
const {LoginPage} = require('./LoginPage.spec');
//const { QueuePage } = require('./QueuePage.spec');

class POManager {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.stackPage=null;
    //    this.queuePage = new QueuePage(this.page);
        
    }

    getHomePage() {
        return this.homePage;
        
    }

    getLoginPage() {
        return this.loginPage;
    }

    getStackPage()
    {    if(!this.stackPage)
        {
            const {StackPage}=require('./StackPage.spec'); 
            this.stackPage=new StackPage(this.page);
        }        
        return this.stackPage;
    }

    // getQueuePage() {
    //     return this.queuePage;
    // }


}
module.exports = {POManager};