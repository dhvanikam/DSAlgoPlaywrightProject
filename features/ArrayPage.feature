@arrays
Feature: Array feature Validations

  Background:
    When User gives the correct DsAlgo portal URL
    When User clicks get started for array after entering valid credential

  @arrays-links
  Scenario Outline: User is able to navigate to "<Links>" on array page
    Given User is on "Array" page after logged in
    When User clicks on "<Links>"
    Then User should be navigate to "<pagename>" page

    Examples:
      | Links                     | pagename                  |
      | arrays-in-python          | Arrays in Python          |
      | arrays-using-list         | Arrays Using List         |
      | basic-operations-in-lists | Basic Operations in Lists |
      | applications-of-array     | Applications of Array     |

  @arrays-tryeditor
  Scenario Outline: User is able to navigate to "<Links>" on array page
    Given User is on "Array" page after logged in
    When User click the Try here button from "<Links>" page
    Then User should be navigate to a page having an tryEditor with a Run button to test

    Examples:
      | Links                     |
      | arrays-in-python          |
      | arrays-using-list         |
      | basic-operations-in-lists |
      | applications-of-array     |

  @arrays-tryeditor-validcode
  Scenario: User is able run valid python code in tryEditor for "<Links>" page
    Given User is on "Array" page after logged in
    When User click the Try here button from "<Links>" page
    And User clicks the run button after entering "<valid python code>" in tryEditor
    Then User should be presented with Run result as "<result>"

    Examples:
      | Links                     | valid python code | result |
      | arrays-in-python          | print('hello')    | hello  |
      | arrays-using-list         | print('hello')    | hello  |
      | basic-operations-in-lists | print('hello')    | hello  |
      | applications-of-array     | print('hello')    | hello  |

  @arrays-tryeditor-invalidcode
  Scenario: User is presented with error message for code with invalid syntax in tryEditor for "<Links>" page
    Given User is on "Array" page after logged in
    When User click the Try here button from "<Links>" page
    And User clicks the run button after entering "<invalid python code>" in tryEditor
    Then User should be presented with error message as "<error message>"

    Examples:
      | Links                     | invalid python code | error message                                    |
      | arrays-in-python          | hello               | NameError: name 'hello' is not defined on line 1 |
      | arrays-using-list         | hello               | NameError: name 'hello' is not defined on line 1 |
      | basic-operations-in-lists | hello               | NameError: name 'hello' is not defined on line 1 |
      | applications-of-array     | hello               | NameError: name 'hello' is not defined on line 1 |
