@TreePage
Feature: User Launch DSAlgo application and test Tree Page

Background:
  When User gives the correct DsAlgo portal URL
  When User clicks get started for tree after entering valid credential

@tree-links
  Scenario Outline: User is able to navigate to "<Links>" on tree page
    Given User is on "Tree" page after logged in
    When User clicks on tree "<Links>"
    Then User should be navigate to "<pagename>" page

    Examples:
      | Links                       | pagename                    |
      |  overview-of-trees          | Overview of Trees           |
      |  terminologies              | Terminologies               |
      | types-of-trees              | Types of Trees              |
      | tree-traversals             | Tree Traversals             |
      | traversals-illustration     | Traversals-Illustration     |
      | binary-trees                | Binary Trees                |
      | types-of-binary-trees       | Types of Binary Trees       |
      | implementation-in-python    | Implementation in Python    |
      | applications-of-binary-trees| Applications of Binary Trees|
      | binary-search-trees         | Binary Search Trees         |
      | implementation-of-bst       | Implementation Of BST       |

@tree-tryeditor
  Scenario Outline: User is able to navigate to "<Links>" on  queue page
    Given User is on "Tree" page after logged in
    When User click the Try here button for Tree page from "<Links>" page
    Then User should be navigate to a page having an tryEditor with a Run button to test

    Examples:
      | Links                       |
      |  overview-of-trees          | 
      |  terminologies              | 
      | types-of-trees              | 
      | tree-traversals             | 
      | traversals-illustration     | 
      | binary-trees                | 
      | types-of-binary-trees       |
      | implementation-in-python    | 
      | applications-of-binary-trees| 
      | binary-search-trees         | 
      | implementation-of-bst       | 

@tree-tryeditor-validcode
  Scenario: User is able run valid python code in tryEditor for "<Links>" page
    Given User is on "Tree" page after logged in
    When User click the Try here button for Tree page from "<Links>" page
    And User clicks the run button after entering "<valid python code>" in tryEditor for Tree page
    Then User should be presented with Run result as "<result>" in Tree page

    Examples:
      | Links                       | valid python code | result |
      |  overview-of-trees          | print('hello')    | hello  |
      |  terminologies              | print('hello')    | hello  |
      | types-of-trees              | print('hello')    | hello  |
      | tree-traversals             | print('hello')    | hello  |
      | traversals-illustration     | print('hello')    | hello  |
      | binary-trees                | print('hello')    | hello  |
      | types-of-binary-trees       | print('hello')    | hello  |
      | implementation-in-python    | print('hello')    | hello  |
      | applications-of-binary-trees| print('hello')    | hello  |
      | binary-search-trees         | print('hello')    | hello  |
      | implementation-of-bst       | print('hello')    | hello  |

@tree-tryeditor-invalidcode
  Scenario: User is presented with error message for code with invalid syntax in tryEditor for "<Links>" page
    Given User is on "Tree" page after logged in
    When User click the Try here button for Tree page from "<Links>" page
    And User clicks the run button after entering "<invalid python code>" in tryEditor for Tree page
    Then User should be presented with error message as "<error message>" in Tree page

    Examples:
      | Links                       | invalid python code | error message                                    |
      | overview-of-trees           | hello               | NameError: name 'hello' is not defined on line 1 |
      | terminologie                | hello               | NameError: name 'hello' is not defined on line 1 |
      | types-of-trees              | hello               | NameError: name 'hello' is not defined on line 1 |
      | tree-traversals             | hello               | NameError: name 'hello' is not defined on line 1 |
      | traversals-illustration     | hello               | NameError: name 'hello' is not defined on line 1 |
      | binary-trees                | hello               | NameError: name 'hello' is not defined on line 1 |
      | types-of-binary-trees       | hello               | NameError: name 'hello' is not defined on line 1 |
      | implementation-in-python    | hello               | NameError: name 'hello' is not defined on line 1 |
      | applications-of-binary-trees| hello               | NameError: name 'hello' is not defined on line 1 |
      | binary-search-trees         | hello               | NameError: name 'hello' is not defined on line 1 |
      | implementation-of-bst       | hello               | NameError: name 'hello' is not defined on line 1 |
      
@tree-practice-questions
  Scenario: The user is able to navigate to QueueOp page and click on Practice Questions
    Given User is on "Tree" page after logged in
    When User clicks Practice Questions after reaching to Implementation of BST Page
    Then User is directed to Practice page


