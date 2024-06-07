@data-structure
Feature: Data structure introduction feature Validations

  Background:
    When User gives the correct DsAlgo portal URL
    When User clicks get started for Data structure introduction after entering valid credential

  @data-structure-navigations
  Scenario Outline: User is able to navigate to links from Data structure introduction page
    Given User is on Data Structures-Introduction page after logged in
    When User clicks on "<Links>"
    Then User should be navigate to "<pagename>" page

    Examples:
      | Links           | pagename        |
      | time-complexity | Time Complexity |

  @data-structure-tryeditor-navigation
  Scenario Outline: The user is able to navigate to a page having an tryEditor from Data structure introduction page
    Given User is on Data Structures-Introduction page after logged in
    When User click the Try here button from Time Complexity page from "<rownumber>" of sheet "<SheetName>"
    Then User should be navigate from DS page to tryEditor page with a Run button to test

    Examples:
      | SheetName       | rownumber |
      | linkspythoncode |         0 |

  @data-structure-tryeditor-validcode
  Scenario: User is able run valid python code in tryEditor for Time Complexity page page
    Given User is on Data Structures-Introduction page after logged in
    When User click the Try here button from Time Complexity page from "<rownumber>" of sheet "<SheetName>"
    And User clicks the run button after entering code in tryEditor from row "<rownumber>" of sheet "<SheetName>" for DS page
    Then User should be presented with Run result from row "<rownumber>" of sheet "<SheetName>" for DS page

    Examples:
      | SheetName       | rownumber |
      | linkspythoncode |         0 |

  @data-structure-tryeditor-invalidcode
  Scenario: User is presented with error message for code with invalid syntax in tryEditor for Time Complexity page page
    Given User is on Data Structures-Introduction page after logged in
    When User click the Try here button from  page from "<rownumber>" of sheet "<SheetName>"
    And User clicks the run button after entering code in tryEditor from row "<rownumber>" of sheet "<SheetName>"
    Then User should be presented with error message from row "<rownumber>" of sheet "<SheetName>"

    Examples:
      | SheetName       | rownumber |
      | linkspythoncode |         4 |
