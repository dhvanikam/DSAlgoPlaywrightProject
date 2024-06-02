@stack
Feature: User tests the stack page on the Ds algo application

  Background: The user is logged in to DS Algo portal
    # Given The user is on Signin page of DS Algo portal
    # When The user enter valid "suba" and "suba@123" credential and click signInButton  
    # Then The user redirected to homepage and have "You are logged in"
    Given User launches the browser
    Given User gives the correct DsAlgo portal URL
    Given User clicks on SignIn link on Home Page
    When User enters valid username "suba" and password "suba@123" and clicks on login button
    When User clicks on Get Started button of Stack module
    # When The user selects the stack option from the dropdown in the homepage  
    

  @TS_stack_01
  Scenario Outline: The user is able to navigate to '<MenuList>' page    
     When The user clicks on the '<MenuList>' link 
     Then user enters the '<validPythonCode>' in the tryEditor 
     Then user gets the valid '<output>'
     Then The user logout  successfully

    Examples:
    |MenuList           |validPythonCode|output|
    |operations-in-stack|print("hello") | hello|
    |implementation     |print("hello") | hello|
    |stack-applications |print("hello") | hello|

@TS_stack_02
  Scenario Outline: The user is able to navigate to '<MenuList>' page    
     When The user clicks on the '<MenuList>' link 
     Then user enters the invalid'<InvalidPythonCode>' in the tryEditor 
     Then user gets the alertbox
     Then The user logout  successfully

    Examples:
    |MenuList           |InvalidPythonCode|Inoutput|
    |operations-in-stack|print hello  | hello|
    |implementation     |print hello  | hello|
    |stack-applications |print hello  | hello|

  
#  @TS_stack_15
#  Scenario: The user is able to navigate to "Practice Questions" in stack Page
#    Given The user is on the "Stack page" after logged in
#    When The user clicks on the Practice Questions button
#    Then The user should be directed to Practice Questions  Page