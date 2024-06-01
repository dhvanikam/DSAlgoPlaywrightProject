@logIn
Feature: Login Action

Background: 
    Given User launches the browser
    When User gives the correct DsAlgo portal URL
    When User clicks on SignIn link on Home Page

  # @LogIn
  # Scenario: User is on Home page and Clicks on Signin
  #   Given user is on Home Page
  #   When user clicks on SignIn button he is directed to login page
  #   Then user validates the login page

  # @LoginTest_Emptyfields
  # Scenario: To verify SignIn with Empty fields
  #   Given User is on Login page
  #   When User clicks on login button with all empty field
  #   Then User verify the message at username as "Please fill out this field."

  # @LoginTest_Invaliddatas
  # Scenario Outline: To verify SignIn with invalid "<username>" and "<password> and gets the result "<result>"
  #   Given User is on Login page
  #   When User enters invalid username as "<username>" and password as "<password>" and gets the result "<result>"
  #   And User clicks login button
  #   Then User verify the message as "<result>"

  #   Examples:
  #     | username | password | result                        |
  #     | abcdefgh | zxyu1234 | Invalid Username and Password |
  #     | asdfger  | @@@@     | Invalid Username and Password |
  #     | ER@$     | sdkfsk12 | Invalid Username and Password |

  # @LoginTest_withonly_username
  # Scenario: To verify SignIn with username only
  #   Given User is on Login page
  #   When User clicks on login button with username as "numpy" only
  #   Then User verify the message at password as "Please fill out this field."

  # @LoginTest_withonly_password
  # Scenario: To verify SignIn with password only
  #   Given User is on Login page
  #   When User clicks on login button with password as "numpy" only
  #   Then User verify the message at user as "Please fill out this field."

  @LoginTest_with_validdata
  Scenario Outline: User  Login with  valid "<username>" and "<password>"
    When User enters valid username "<username>" and password "<password>" and clicks on login button
    Then User navigates to the home page with a message "You are logged in"

    Examples:
      | username        | password  |
      | julie@gmail.com | Sdet@1234 |
