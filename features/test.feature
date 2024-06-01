# @login
# Feature: Login Validations

# @login_validCredential
# Scenario Outline: Login with valid credential
# Given User is on login page
# When User provide valid username "<username>" and password "<password>" and click on login button
# Then User should able to see successful login

# Examples:
# |username|password|
# |tomsmith|SuperSecretPassword!|