@regression
Feature: Home Page Functionality without sign in for DsAlgo Website

################ End Point scenarios #####################

@safeLanding @positive
Scenario: Verify User is able to land on home page
    Given User launches the browser
    When User gives the correct DsAlgo portal URL
    Then User lands on home page

################ SignIn Link scenarios #####################    

@SignIn @non-functional
Scenario: Verify user can navigate to Sign In Page
    Given User launches the browser
    And User gives the correct DsAlgo portal URL
    When User sees SignIn link 

@SignIn_positive
Scenario: Verify user can navigate to Sign In Page
    Given User launches the browser
    And User gives the correct DsAlgo portal URL
    When User clicks on SignIn link on Home Page
    Then User lands on SignIn Page

################ Registration Link scenarios #####################    

@Registration @non-functional
Scenario: Verify user can navigate to Registration Page
    Given User launches the browser
    And User gives the correct DsAlgo portal URL
    When User sees Registration link

@Registration_positive
Scenario: Verify user can navigate to Registration Page
    Given User launches the browser
    And User gives the correct DsAlgo portal URL
    When User clicks on Registration link
    Then User lands on Registration Page

################ Module Panels scenarios #####################    

