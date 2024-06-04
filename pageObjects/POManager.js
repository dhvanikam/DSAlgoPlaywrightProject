const {HomePage} = require('./HomePage.spec');
const {LoginPage} = require('./LoginPage.spec');
//const { QueuePage } = require('./QueuePage.spec');
const {ArrayPage} = require('./ArrayPage.spec');



class POManager {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page,this);
        this.loginPage = new LoginPage(this.page,this);
        this.stackPage=null;
    //    this.queuePage = new QueuePage(this.page);
        this.arrayPage = new ArrayPage(this.page,this);

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
            this.stackPage=new StackPage(this.page,this);
        }        
        return this.stackPage;
    }

    // getQueuePage() {
    //     return this.queuePage;
    // }

    getArrayPage(){
        return this.arrayPage;
    }

}
module.exports = {POManager};