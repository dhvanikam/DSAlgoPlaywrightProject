@arrays
Feature: Array feature Validations

  Background:
    When User gives the correct DsAlgo portal URL
    When User clicks get started for array after entering valid credential

  @arrays-links-navigations
  Scenario Outline: User is able to navigate to links from array page
    Given User is on "Array" page after logged in
    When User clicks on "<Links>"
    Then User should be navigate to "<pagename>" page

    Examples:
      | Links                     | pagename                  |
      | arrays-in-python          | Arrays in Python          |
      | arrays-using-list         | Arrays Using List         |
      | basic-operations-in-lists | Basic Operations in Lists |
      | applications-of-array     | Applications of Array     |

  @arrays-practiceQuetionsLink-navigation
  Scenario Outline: User is able to navigate to a page having an Practice Questions from array page
    Given User is on "Array" page after logged in
    When User click the practice question button from "<Links>" page
    Then User should be navigate to a page having "Practice Questions"

    Examples:
      | Links                     |
      | arrays-in-python          |
      | arrays-using-list         |
      | basic-operations-in-lists |
      | applications-of-array     |

  @arrays-tryeditor-navigation
  Scenario Outline: The user is able to navigate to a page having an tryEditor from "<pagename>"
    Given User is on "Array" page after logged in
    When User click the Try here button from "<pagename>" page from "<rownumber>" of sheet "<SheetName>"
    Then User should be navigate to a page having an tryEditor with a Run button to test

    Examples:
      | pagename                       | SheetName       | rownumber |
      | Arrays in Python page          | linkspythoncode |         0 |
      | Arrays Using List page         | linkspythoncode |         1 |
      | Basic Operations in Lists page | linkspythoncode |         2 |
      | Applications of Array page     | linkspythoncode |         3 |

  @arrays-tryeditor-validcode
  Scenario: User is able run valid python code in tryEditor for "<pagename>" page
    Given User is on "Array" page after logged in
    When User click the Try here button from "Links" page from "<rownumber>" of sheet "<SheetName>"
    And User clicks the run button after entering code in tryEditor from row "<rownumber>" of sheet "<SheetName>"
    Then User should be presented with Run result from row "<rownumber>" of sheet "<SheetName>"

    Examples:
      | pagename                       | SheetName       | rownumber |
      | Arrays in Python page          | linkspythoncode |         0 |
      | Arrays Using List page         | linkspythoncode |         1 |
      | Basic Operations in Lists page | linkspythoncode |         2 |
      | Applications of Array page     | linkspythoncode |         3 |

  @arrays-tryeditor-invalidcode
  Scenario: User is presented with error message for code with invalid syntax in tryEditor for "<pagename>"
    Given User is on "Array" page after logged in
    When User click the Try here button from "<pagename>" page from "<rownumber>" of sheet "<SheetName>"
    And User clicks the run button after entering code in tryEditor from row "<rownumber>" of sheet "<SheetName>"
    Then User should be presented with error message from row "<rownumber>" of sheet "<SheetName>"

    Examples:
      | pagename                       | SheetName       | rownumber |
      | Arrays in Python page          | linkspythoncode |         4 |
      | Arrays Using List page         | linkspythoncode |         5 |
      | Basic Operations in Lists page | linkspythoncode |         6 |
      | Applications of Array page     | linkspythoncode |         7 |

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

  @arrays-practice-questions-runValid-excel
  Scenario Outline: User is able to run the valid python to "<PracticeQuestionLinks>" on array page
    Given User is on "Array" page after logged in
    When User click the "<PracticeQuestionLinks>" from practice question page
    And User clicks the run button after entering code in <PracticeQuestionLinks> from row "<rownumber>" of sheet "<SheetName>"
    Then User should be presented with Run result from row "<rownumber>" of sheet "<SheetName>"

    Examples:
      | PracticeQuestionLinks | SheetName  | rownumber |
      | /question/1           | pythonCode |         2 |
      # | /question/2           | pythonCode |         4 |
      # | /question/3           | pythonCode |         6 |
      # | /question/4           | pythonCode |         8 |

  @arrays-practice-questions-submitValid-excel
  Scenario Outline: User is able to run the valid python to "<PracticeQuestionLinks>" on array page
    Given User is on "Array" page after logged in
    When User click the "<PracticeQuestionLinks>" from practice question page
    And User clicks the submit button after entering code in <PracticeQuestionLinks> from row "<rownumber>" of sheet "<SheetName>"
    Then User should be presented with result from row "<rownumber>" of sheet "<SheetName>"

    Examples:
      | PracticeQuestionLinks | SheetName  | rownumber |
      | /question/1           | pythonCode |         3 |
      | /question/2           | pythonCode |         5 |
      | /question/3           | pythonCode |         7 |
      | /question/4           | pythonCode |         9 |

  @arrays-practice-questions-runInvalid-excel
  Scenario Outline: User is able to get error message for invalid python for "<PracticeQuestionLinks>" on array page
    Given User is on "Array" page after logged in
    When User click the "<PracticeQuestionLinks>" from practice question page
    And User clicks the run button after entering code in <PracticeQuestionLinks> from row "<rownumber>" of sheet "<SheetName>"
    Then User should be presented with error message from row "<rownumber>" of sheet "<SheetName>"

    Examples:
      | PracticeQuestionLinks | SheetName  | rownumber |
      | /question/1           | pythonCode |        10 |
      | /question/2           | pythonCode |        11 |
      | /question/3           | pythonCode |        12 |
      | /question/4           | pythonCode |        13 |

  @arrays-practice-questions-submitInvalid-excel
  Scenario Outline: User is able to get error message for invalid python for "<PracticeQuestionLinks> for array page
    Given User is on "Array" page after logged in
    When User click the "<PracticeQuestionLinks>" from practice question page
    And User clicks the submit button after entering code in <PracticeQuestionLinks> from row "<rownumber>" of sheet "<SheetName>"
    Then User should be presented with error message from row "<rownumber>" of sheet "<SheetName>"

    Examples:
      | PracticeQuestionLinks | SheetName  | rownumber |
      | /question/1           | pythonCode |        10 |
      | /question/2           | pythonCode |        11 |
      | /question/3           | pythonCode |        12 |
      | /question/4           | pythonCode |        13 |
