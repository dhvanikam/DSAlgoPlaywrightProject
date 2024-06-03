@homePage_Val
Feature: Home Page Functionality without sign in for DsAlgo Website

################ End Point scenarios #####################

Scenario: Verify User is able to land on home page
    Given User launches the browser
    When User gives the correct DsAlgo portal URL
    Then User lands on home page

# @404 @incorrectendpoint @negative
# Scenario: Verify User is able to land on home page
#     Given User launches the browser
#     When User gives invalid DsAlgo URL with incorrect endpoint
#     Then User recieves "404" page not found error

# @404 @misspelledbaseURL @negative
# Scenario: Verify User is able to land on home page
#     Given User launches the browser
#     When User gives DsAlgo URL with misspelled baseURL
#     Then User recieves "404" page not found error 

################ SignIn Link scenarios #####################   

Scenario: Verify user can navigate to Sign In Page
    Given User launches the browser
    And User gives the correct DsAlgo portal URL
    When User sees SignIn link 

Scenario: Verify user can navigate to Sign In Page
    Given User launches the browser
    And User gives the correct DsAlgo portal URL
    When User clicks on SignIn link on Home Page
    Then User lands on SignIn Page

################ Registration Link scenarios #####################  

Scenario: Verify user can navigate to Registration Page
    Given User launches the browser
    And User gives the correct DsAlgo portal URL
    When User sees Registration link

Scenario: Verify user can navigate to Registration Page
    Given User launches the browser
    And User gives the correct DsAlgo portal URL
    When User clicks on Registration link
    Then User lands on Registration Page

################ Dropdown scenarios #####################    

Scenario: Verify dropdown
    Given User launches the browser
    When User gives the correct DsAlgo portal URL
   	Then User sees dropdown menu with "Data Structures" option selected on home page  

@dropdown @non-functional @positive
Scenario: Verify dropdown has six options
    Given User launches the browser
    And User gives the correct DsAlgo portal URL 
    When User clicks on dropdown menu
   	Then User sees "6" options with following options:
   	|Arrays|
   	|Linked List|
   	|Stack|
   	|Queue|
   	|Tree|
   	|Graph|    


Scenario: Verify Unsuccessful access of dropdown topic modules without signing in
    Given User launches the browser
    And User gives the correct DsAlgo portal URL
   	And User clicks on dropdown menu
   	When User clicks on each of the dropdown menu
	Then User sees "You are not logged in" message each time


################ Module Panels scenarios #####################    

# @modulePanel @non-functional
# Scenario: Verify presence of seven topic panels
#     Given User launches the browser
#     And User gives the correct DsAlgo portal URL
#     When User gives the correct LMS portal URL
#     Then User sees "7" panels with following panel header:
   	#|Data Structures-Introduction|
    #|Array|
   	#|Linked List|
   	#|Stack|
   	#|Queue|
   	#|Tree|
   	#|Graph|

#@modulePanel @negative
# Scenario: Verify Unsuccessful access of topic panels without signing in
#     Given User launches the browser
#     And User gives the correct DsAlgo portal URL	
#     When User clicks Get Started button of every topic panels
#     Then User sees "You are not logged in" message each time
