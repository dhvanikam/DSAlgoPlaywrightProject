const{Given, When, Then} = require('@cucumber/cucumber');
const{expect} = require('@playwright/test');
const {POManager} = require('../../pageObjects/POManager');

When('User clicks on Get Started button of Data Structures-Introduction module', async function () {
    await this.homePage.clickGetStartedOf_DataStructure();
  });

  Then('User is able to go to Data Structures-Introduction page', async function () {
    await expect(this.page).toHaveTitle("Data Structures-Introduction");
  });

  When('User clicks on Get Started button of Array module', async function () {
    await this.homePage.clickGetStartedOf_Array();
  });

  Then('User is able to go to Array page', async function () {
    await expect(this.page).toHaveTitle("Array");
  });

  When('User clicks on Get Started button of Linked List module', async function () {
    await this.homePage.clickGetStartedOf_LinkedList();
  });

  Then('User is able to go to Linked List page', async function () {
    await expect(this.page).toHaveTitle("Linked List");
  });

  When('User clicks on Get Started button of Stack module', async function () {
    await this.homePage.clickGetStartedOf_Stack();
  }); 

  Then('User is able to go to Stack page', async function () {
    await expect(this.page).toHaveTitle("Stack");
  });

  When('User clicks on Get Started button of Queue module', async function () {
    await this.homePage.clickGetStartedOf_Queue();
  });

  Then('User is able to go to Queue page', async function () {
    await expect(this.page).toHaveTitle("Queue");
  });

  When('User clicks on Get Started button of Tree module', async function () {
    await this.homePage.clickGetStartedOf_Tree();
  });  

  Then('User is able to go to Tree page', async function () {
    await expect(this.page).toHaveTitle("Tree");
  });

  When('User clicks on Get Started button of Graph module', async function () {
    await this.homePage.clickGetStartedOf_Graph();
  });

  Then('User is able to go to Graph page', async function () {
    await expect(this.page).toHaveTitle("Graph");
  });

  Then('User can see signed out link on Home Page', async function () {
    expect(await this.homePage.isSignOutLinkVisible()).toBeTruthy();
  });

  When('User clicks on Sign out link on Home Page', async function () {
    await this.homePage.clickSignOutLink();
  });

  Then('User is signed out', async function () {
    expect(await this.homePage.isSignInLinkVisible()).toBeTruthy();
  });