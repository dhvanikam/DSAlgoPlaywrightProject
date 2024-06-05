@LinkedList
Feature: Stack Page Validations

  Background:
    When User gives the correct DsAlgo portal URL
    When User clicks get started button for LinkedList after entering valid credential

  @LinkedList-links 
  Scenario Outline: User is able to navigate to "<Links>" on stack page
    Given User is on "LinkedList" page after logged in to the portal
    When User clicks on "<Links>" in LinkedList page
    Then User should be navigate to "<pagename>" in LinkedList page

    Examples:    
    |Links                          |pagename|
    |introduction                   |Introduction|
    |creating-linked-list           |Creating Linked LIst|
    |types-of-linked-list           |Types of Linked List|
    |implement-linked-list-in-python|Implement Linked List in Python|
    |traversal                      |Traversal|
    |insertion-in-linked-list       |Insertion|
    |deletion-in-linked-list        |Deletion|


  @LinkedList-tryeditor 
  Scenario Outline: User is able to navigate to "<Links>" on stack page
    Given User is on "LinkedList" page after logged in to the portal
    When User click the Try here button from "<Links>" in LinkedList page
    Then User should be directed to a page having an tryEditorr with a Run button to test

     Examples:    
    |Links      |                    
    |introduction   |                
    |creating-linked-list   |         
    |implement-linked-list-in-python|
    |types-of-linked-list|
    |traversal               |      
    |insertion-in-linked-list  |    
    |deletion-in-linked-list   |    

  @LinkedList-tryeditor-validcode 
  Scenario: User is able run valid python code in tryEditor for '<Links>' page
    Given User is on "LinkedList" page after logged in to the portal
    When User click the Try here button from '<Links>' in LinkedList page
    And User clicks the run button after entering '<valid python code>' in the tryEditorr page
    Then User should be presented with Run result as '<result>' in the console screen

    Examples:
      | Links                           | valid python code | result |
      | introduction                    | print("hello")    | hello  |
      | creating-linked-list            | print("hello")    | hello  |
      | implement-linked-list-in-python | print("hello")    | hello  |
      |types-of-linked-list             | print("hello")    | hello  |
      |traversal                        | print("hello")    | hello  |    
      |insertion-in-linked-list         | print("hello")    | hello  |  
      |deletion-in-linked-list          | print("hello")    | hello  | 
     
 @LinkedList-tryeditor-invalidcode
  Scenario: User is presented with error message for code with invalid syntax in tryEditor for "<Links>" page
    Given User is on "LinkedList" page after logged in to the portal
    When User click the Try here button from "<Links>" in LinkedList page
    And User clicks the run button after entering invalidcode"<invalid python code>" in the tryEditorr page
    Then User should be presented with error message as "<error message>" in the popupbox

    Examples:
      | Links                           | invalid python code | error message                                    |
      | introduction                    | hello               | NameError: name 'hello' is not defined on line 1 |
      | creating-linked-list            | hello               | NameError: name 'hello' is not defined on line 1 |
      | implement-linked-list-in-python | hello               | NameError: name 'hello' is not defined on line 1 |
      | types-of-linked-list            | hello               | NameError: name 'hello' is not defined on line 1 |
      |traversal                        | hello               | NameError: name 'hello' is not defined on line 1 |
      |insertion-in-linked-list         | hello               | NameError: name 'hello' is not defined on line 1 |
      |deletion-in-linked-list          | hello               | NameError: name 'hello' is not defined on line 1 |

 @PracticeQuestions_LinkedList
 Scenario Outline: The user is able to navigate to '<Links>' in stack Page
   Given User is on "LinkedList" page after logged in to the portal
   When The user clicks on the Practice Questions button on the '<Links>' in the LinkedList page
   Then The user should be directed to Practice Questions  Page which contains '<practiceLinks>' url

   Examples:        
    |Links                          |practiceLinks|
    |introduction                   |linked-list/practice|        
    |creating-linked-list           |linked-list/practice|     
    |implement-linked-list-in-python|linked-list/practice|
    |types-of-linked-list           |linked-list/practice|
    |traversal                      |linked-list/practice|   
    |insertion-in-linked-list       |linked-list/practice| 
    |deletion-in-linked-list        |linked-list/practice|  
