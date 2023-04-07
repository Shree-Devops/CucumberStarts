#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)

#@tag
Feature: Title of your feature

  @tag1
  Scenario: Login
    Given User is on Login page
    When User enters username string
    And User enters password string
    Then User clicks on submit button
    Then User navigates to "First" page
  @tag2
  Scenario Outline: onboarding
    Given User is on "Login" page
    When User enters <username> string
    And User enters password
    Then User clicks on SignIn button
    Then User navigates to "Onboarding" page
    #Then Validates presence of "Sample" field text having double quotes
    

    Examples: 
      | username |
      | shree    |
     # | mohini   |

@tag3
  Scenario: Datatable without header
    Given User is on "Login" page 
    Then User enters details from Datatable without header
      | username1 | pwd1 |
      | username2 | pwd2 |

     