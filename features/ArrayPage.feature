@arrays
Feature: Array feature Validations

  Background:
    When User gives the correct DsAlgo portal URL
    When User clicks get started for array after entering valid credential

  @arrays-links-navigations
  Scenario Outline: User is able to navigate to <Links> from array page
    Given User is on "Array" page after logged in
    When User clicks on "<Links>"
    Then User should be navigate to "<pagename>" page

    Examples:
      | Links                     | pagename                  |
      | arrays-in-python          | Arrays in Python          |
      | arrays-using-list         | Arrays Using List         |
      | basic-operations-in-lists | Basic Operations in Lists |
      | applications-of-array     | Applications of Array     |

  @arrays-practiceQuetionsLink-navigations
  Scenario Outline: User is able to navigate to <Links> from array page
    Given User is on "Array" page after logged in
    When User click the practice question button from "<Links>" page
    Then User should be navigate to a page having "Practice Questions"

    Examples:
      | Links                     |
      | arrays-in-python          |
      | arrays-using-list         |
      | basic-operations-in-lists |
      | applications-of-array     |

  @arrays-tryeditor-navigations
  Scenario Outline: User is able to navigate to <Links> from array page
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
  Scenario: User is able run valid python code in tryEditor for <Links> page
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

  @arrays-practice-questionsLinks
  Scenario Outline: User is able to navigate to <PracticeQuestionLinks> on array page
    Given User is on "Array" page after logged in
    When User click the Practice Questions from "Arrays in Python" page
    And User click on "<PracticeQuestionLinks>" page
    Then User should be navigate to a page having an question with a Run button and submit button to test

    Examples:
      | PracticeQuestionLinks | pagename                                |
      | /question/1           | Search the array                        |
      | /question/2           | Max Consecutive Ones                    |
      | /question/3           | Find Numbers with Even Number of Digits |
      | /question/4           | Squares of a Sorted Array               |

  @arrays-practice-question1-run
  Scenario Outline: User is able to run the valid python to <PracticeQuestionLinks> on array page
    Given User is on "Array" page after logged in
    When User click the "<PracticeQuestionLinks>" from practice question page
    And User clicks the run button after entering code in tryEditor
      """
      def search(input_list, num):
        if(num in input_list):
          print("Element Found")
        else:
        	print("Not Found")
      search([12, 23, 45, 67, 6, 90] , 12)
      """
    Then User should be presented with Run result as "<results>"

    Examples:
      | PracticeQuestionLinks | results       |
      | /question/1           | Element Found |

  @arrays-practice-question1-submit
  Scenario Outline: User is able to run the valid python to <PracticeQuestionLinks> on array page
    Given User is on "Array" page after logged in
    When User click the "<PracticeQuestionLinks>" from practice question page
    And User clicks the submit button after entering code in tryEditor
      """
      def search(input_list, num):
        if(num in input_list):
          print("Element Found")
        else:
        	print("Not Found")
      search([12, 23, 45, 67, 6, 90] , 12)
      """
    Then User should be presented with Submit result as "<Results>"

    Examples:
      | PracticeQuestionLinks | Results          |
      | /question/1           | Submit sucessful |

  @arrays-practice-question1-run-fail
  Scenario Outline: User is able to run the invalid python to <PracticeQuestionLinks> on array page
    Given User is on "Array" page after logged in
    When User click the "<PracticeQuestionLinks>" from practice question page
    And User clicks the run button after entering code in tryEditor
      """
      def search(input_list, num):
        if(num in input_list):
          print("Element Found"
        else:
        	print("Not Found")
      search([12, 23, 45, 67, 6, 90] , 12)
      """
    Then User should be presented with error message as "<error message>"

    Examples:
      | PracticeQuestionLinks | error message                    |
      | /question/1           | SyntaxError: bad input on line 4 |

  @arrays-practice-question1-submit-fail
  Scenario Outline: User is able to run the invalid python to <PracticeQuestionLinks> on array page
    Given User is on "Array" page after logged in
    When User click the "<PracticeQuestionLinks>" from practice question page
    And User clicks the submit button after entering code in tryEditor
      """
      def search(input_list, num):
        if(num in input_list):
          print("Element Found"
        else:
        	print("Not Found")
      search([12, 23, 45, 67, 6, 90] , 12)
      """
    Then User should be presented with error message as "<error message>"

    Examples:
      | PracticeQuestionLinks | error message                    |
      | /question/1           | SyntaxError: bad input on line 4 |

  @arrays-practice-question2-run-excel
  Scenario Outline: User is able to run the valid python to <PracticeQuestionLinks> on array page
    Given User is on "Array" page after logged in
    When User click the "<PracticeQuestionLinks>" from practice question page
    And User clicks the run button after entering code in tryEditor from row "<rownumber>" of sheet "<SheetName>"
    Then User should be presented with Run result from row "<rownumber>" of sheet "<SheetName>"

    Examples:
      | PracticeQuestionLinks | SheetName  | rownumber |
      # | /question/1           | pythonCode |         2 |
      # | /question/2           | pythonCode |         6 |
      # | /question/3           | pythonCode |         8 |
        | /question/4           | pythonCode |         10 |

