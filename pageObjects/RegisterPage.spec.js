// @ts-ignore
const { randomFill } = require("crypto");
const ExcelJS = require('exceljs');
const util = require('../utils/util.spec')

class RegisterPage {

    constructor(page, pommanager) {
        this.page = page;
        this.pommanager = pommanager;
        this.username = page.locator("#id_username");
        this.password = page.locator("#id_password1");
        this.confirmpassword = page.locator("#id_password2");
        this.RegisterButton = page.locator("input[value='Register']");
        this.successRegisterText = page.locator("div.alert.alert-primary");
        //this.errorMsgText = page.getByText("#id_username");
        this.errorMsgText = page.locator("div.alert.alert-primary");
    }

    //Register with Valid Credentials
    async registerWithValidCredentials(username, password, confirmpassword) {
        username = username + util.getRandomInt(50);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmpassword.fill(confirmpassword)
        await this.RegisterButton.click();
        return this.pommanager.getHomePage();
    }

    async successRegister() {
        if (await this.successRegisterText.isVisible()) {
            return this.successRegisterText;
        }

    }

    //Register with Empty Fields
    async clickRegisterWithEmptyFields(username, password, confirmpassword) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmpassword.fill(confirmpassword)
        await this.RegisterButton.click();
    }

    /*
    async errorMsg(){
        await this.username.hover();
            await this.RegisterButton.click();
            tooltipText = await this.username.evaluate(node => node.validationMessage);
            console.log('Tooltip text:', tooltipText);
        return tooltipText.trim();
    }*/

    async errorMsg(fieldName) {

        let tooltipText = "";

        if(fieldName.toLowerCase() === "username"){
            console.log("Inside username block")
            await this.username.hover();
            await this.RegisterButton.click();
            tooltipText = await this.username.evaluate(node => node.validationMessage);//this is not capturing
        }
        else if(fieldName.toLowerCase() === "password"){
            await this.password.hover();
            await this.RegisterButton.click();
            tooltipText = await this.password.evaluate(node => node.validationMessage);
        }
        else if(fieldName.toLowerCase() === "confirmpassword"){
            await this.confirmpassword.hover();
            await this.RegisterButton.click();
            tooltipText = await this.confirmpassword.evaluate(node => node.validationMessage);
        }
        else{

        }
       
        console.log('Tooltip text:', tooltipText);
        return tooltipText.trim();
    }

    //Register with InValid Credentials
    async clickRegisterWithInvalidCredentials(username, password, confirmpassword) {
        await this.username.fill(username);            
        await this.password.fill(password);   
        await this.confirmpassword.fill(confirmpassword)
        await this.RegisterButton.click();

        let actualErrText;

        if(await this.errorMsgText.isVisible())
        {
           actualErrText = await this.errorMsgText.textContent();           
        }
        return actualErrText.trim();

    }

}

module.exports = { RegisterPage };