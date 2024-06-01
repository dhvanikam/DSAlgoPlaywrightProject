const {HomePage} = require('./HomePage.spec');
const {LoginPage} = require('./LoginPage.spec');



class POManager {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.loginPage = new LoginPage(this.page);
    }

    getHomePage() {
        return this.homePage;
    }

    getLoginPage() {
        return this.loginPage;
    }

}
module.exports = {POManager};