@Register
Feature: Register page Validation

  Background: User navigates to Register page from Home page
    Given User launches the browser
    When User gives the correct DsAlgo portal URL
    When User clicks on Registration link
    

  # @RegisterTest_Emptyfields
  # Scenario Outline: To verify Register Form with Empty fields
  #   When User click Register with all empty field in "<username>", "<password>" and "<confirmpassword>"
  #   Then It should display an error "Please fill out this field." below username textbox
  #    Examples:
  #     | username        | password  | confirmpassword |
  #     |                 |           |                 |

  # @RegisterTest_withonly_username @table
  # Scenario: The user is presented with error message for empty fields below password textbox
  #   When The user clicks Register button after entering username with other fields empty
  #     | username  |password  | confirmpassword |
  #     #|           |          |                 |
  #     | Sdet@1234 |          |                 |
  #     #| Sdet@second|pass     |                 |
  # Then It should display an error "Please fill out this field." below password textbox

  # @RegisterTest_withonly_password
  # Scenario Outline: The user is presented with error message for empty fields below username textbox
  #   Given The user opens Register Page
  #   When The user clicks Register button after entering password with other fields empty
  #     | password |
  #     | Sdet1234 |
  #   Then It should display an error "Please fill out this field." below username textbox

  # @RegisterTest_withonly_confirmpassword
  # Scenario Outline: The user is presented with error message for empty fields above Password Confirmation textbox
  #   Given The user opens Register Page
  #   When The user clicks Register button after entering confirmation password with other fields empty
  #     | confirm password |
  #     | Sdet1234         |
  #   Then It should display an error "Please fill out this field." below username textbox

  # @RegisterTest_withonly_username&pwd
  # Scenario Outline: To verify Register Form with username and password only
  #   Given The user opens Register Page
  #   When User enters username and password only and click register
  #     | username | password |
  #     | Unumpy   | Pnumpy   |
  #   Then User verify the message at confirmpassword on Register Page as "Please fill out this field."

  @RegisterTest_with_invalidcredentials_Excel
  Scenario Outline: To verify Register Form with invalid Credentials
    #Given The user opens Register Page
    When user enters invalid credentials in the sheetname "<sheetname>" and row number <rownum>
    Then User verifies for the mismatch error message "password_mismatch:The two password fields didn’t match."

     Examples:
      | sheetname                   | rownum |
      | Register_InvalidCredentials |      2 |
      | Register_InvalidCredentials |      3 | 
      | Register_InvalidCredentials |      4 |
      | Register_InvalidCredentials |      5 |
      | Register_InvalidCredentials |      6 |
      | Register_InvalidCredentials |      7 |
      | Register_InvalidCredentials |      8 |  


  @RegisterTest_with_invalidcredentials_Excel @OnlySheetname
  Scenario Outline: To verify Register Form with invalid Credentials with all data sets
    #Given The user opens Register Page
    When user enters invalid credentials in the sheetname "<sheetname>"
    #Then User verifies for the mismatch error message "password_mismatch:The two password fields didn’t match."

     Examples:
      | sheetname                   |
      #| Register_InvalidCredentials |
      |Sheet1|


@RegisterTest_with_validdata_JSON
  Scenario Outline: User register with valid information
    #Given The user opens Register Page
    When User logs in with valid credentials from "<JsonDataSet>"
    Then User navigate to the home page with a message "New Account Created"
    Examples:
       | JsonDataSet|
       | 1      |
       | 2      |