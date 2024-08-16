@stack
Feature: Stack Page Validations

  Background:
    When User gives the correct DsAlgo portal URL
    When User clicks get started button for stack after entering valid credential

  @stack-links
  Scenario Outline: User is able to navigate to "<Links>" on stack page
    Given User is on "stack" page after logged in to the portal
    When User clicks on "<Links>" in stack page
    Then User should be navigate to "<pagename>" in stack page

    Examples:    
    |Links              |
    |operations-in-stack|
    |implementation     |
    |stack-applications |


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

  # @arrays-tryeditor-validcode
  # Scenario: User is able run valid python code in tryEditor for "<Links>" page
  #   Given User is on "Array" page after logged in
  #   When User click the Try here button from "<Links>" page
  #   And User clicks the run button after entering "<valid python code>" in tryEditor
  #   Then User should be presented with Run result as "<result>"

  #   Examples:
  #     | Links                     | valid python code | result |
  #     | arrays-in-python          | print('hello')    | hello  |
  #     | arrays-using-list         | print('hello')    | hello  |
  #     | basic-operations-in-lists | print('hello')    | hello  |
  #     | applications-of-array     | print('hello')    | hello  |

  # @arrays-tryeditor-invalidcode
  # Scenario: User is presented with error message for code with invalid syntax in tryEditor for "<Links>" page
  #   Given User is on "Array" page after logged in
  #   When User click the Try here button from "<Links>" page
  #   And User clicks the run button after entering "<invalid python code>" in tryEditor
  #   Then User should be presented with error message as "<error message>"

  #   Examples:
  #     | Links                     | invalid python code | error message                                    |
  #     | arrays-in-python          | hello               | NameError: name 'hello' is not defined on line 1 |
  #     | arrays-using-list         | hello               | NameError: name 'hello' is not defined on line 1 |
  #     | basic-operations-in-lists | hello               | NameError: name 'hello' is not defined on line 1 |
  #     | applications-of-array     | hello               | NameError: name 'hello' is not defined on line 1 |
