@stack
Feature: Stack Page Validations

  Background:
    When User gives the correct DsAlgo portal URL
    When User clicks get started button for stack after entering valid credential

  @stack-links 
  Scenario Outline: User is able to navigate to "<Links>" on stack page
    Given User is on "Stack" page after logged in to the portal
    When User clicks on "<Links>" in stack page
    Then User should be navigate to "<pagename>" in stack page

    Examples:    
    |Links              |pagename|
    |operations-in-stack|Operations in Stack|
    |implementation     |Implementation|
    |stack-applications |Applications|


  @stack-tryeditor 
  Scenario Outline: User is able to navigate to "<Links>" on stack page
    Given User is on "stack" page after logged in to the portal
    When User click the Try here button from "<Links>" in stack page
    Then User should be navigate to a page having an tryEditorr with a Run button to test

    Examples:        
    |Links              |
    |operations-in-stack|
    |implementation     |
    |stack-applications |

  @stack-tryeditor-validcode 
  Scenario: User is able run valid python code in tryEditor for "<Links>" page
    Given User is on "stack" page after logged in to the portal
    When User click the Try here button from "<Links>" in stack page
    And User clicks the run button after entering "<valid python code>" in the tryEditorr
    Then User should be presented with Run result as "<result>" in the console

    Examples:
      | Links                     | valid python code | result |
      | operations-in-stack       | print('hello')    | hello  |
      | implementation            | print('hello')    | hello  |
      | stack-applications        | print('hello')    | hello  |
     
 @stack-tryeditor-invalidcode
  Scenario: User is presented with error message for code with invalid syntax in tryEditor for "<Links>" page
    Given User is on "stack" page after logged in to the portal
    When User click the Try here button from "<Links>" in stack page
    And User clicks the run button after entering invalid python code "<invalid python code>" in the tryEditorr
    Then User should be presented with error message as "<error message>" in the popup box

    Examples:
      | Links                     | invalid python code | error message                                    |
      | operations-in-stack       | hello               | NameError: name 'hello' is not defined on line 1 |
      | implementation            | hello               | NameError: name 'hello' is not defined on line 1 |
      | stack-applications        | hello               | NameError: name 'hello' is not defined on line 1 |
     
 @PracticeQuestions_stack
 Scenario Outline: The user is able to navigate to '<Links>' in stack Page
   Given User is on "stack" page after logged in to the portal
   When The user clicks on the Practice Questions button on the '<Links>' page
   Then The user should be directed to Practice Questions  Page which contains '<practiceLinks>'

   Examples:        
    |Links              |practiceLinks|
    |operations-in-stack|stack/practice|
    |implementation     |stack/practice|
    |stack-applications |stack/practice|
