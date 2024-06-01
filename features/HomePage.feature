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

@modulePanel @non-functional
Scenario: Verify presence of seven topic panels
    Given User launches the browser
    And User gives the correct DsAlgo portal URL
    When User gives the correct LMS portal URL
    Then User sees "7" panels with following panel header:
   	#|Data Structures-Introduction|
    #|Array|
   	#|Linked List|
   	#|Stack|
   	#|Queue|
   	#|Tree|
   	#|Graph|

@modulePanel @negative
Scenario: Verify Unsuccessful access of topic panels without signing in
    Given User launches the browser
    And User gives the correct DsAlgo portal URL	
    When User clicks Get Started button of every topic panels
    Then User sees "You are not logged in" message each time
