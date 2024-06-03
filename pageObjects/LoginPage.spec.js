
class LoginPage {
    
    constructor(page,pommanager) {
        this.page = page;
        this.pommanager=pommanager;
        this.username = page.locator("#id_username");
        this.password = page.locator("#id_password");
        this.loginButton = page.locator("input[value='Login']");
        this.successLoginText = page.locator("div.alert.alert-primary");
     }

      async validLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        return this.pommanager.getHomePage();
    }

    async successLogin() {
        if(await this.successLoginText.isVisible()){
            //const msg = "You are logged in";
            //return this.successLoginText.textContent();
            return this.successLoginText;
        }
        /*  
		else {msg= "you are not logged in";}
		return msg;*/
    }
}
module.exports = {LoginPage};