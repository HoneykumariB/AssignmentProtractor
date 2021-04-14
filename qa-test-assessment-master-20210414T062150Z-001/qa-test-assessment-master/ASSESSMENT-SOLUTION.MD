# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.

Name: Honey Kumari Barnwal
Contact email: honeyk1621@gmail.com

Approached Used:  Cucumber and Protractor (BDD approach)


Scenario covered in Automation -->

2 feature files are added 

First :Person-search.feature

Scenario: Search for person using valid character
        Given The app is open on "localhost"
        When user seach for "Luke Skywalker" in searchBar
        Then user is displayed with "<characters>" results

 Scenario Outline: persons
        Given The app is open on "localhost"
        When user click on people option
        And user seach for "<characters>" in searchBar
        And  user click on search 
        Then user is displayed with "<characters>" results
        And Result displays Gender for "<characters>"
        And Result displays Birth year for "<characters>"
        And Result displays Eye color for "<characters>"
        And Result displays Skin color for "<characters>"

       Examples: 
        | characters |
        | Luke Skywalker |
        | Leia Organa |
        | r2 |

Scenario: Search for person using invalid character
        Given The app is open on "localhost"
         When user seach for "@#!##@" in searchBar
        Then No search result displayed 

Scenario: Multiple result validation for partial character
        Given The app is open on "localhost"
        When user click on people option
        And user seach for "a" in searchBar
        And  user click on search 
        Then user is displayed with multiple results
       

Scenario: To verify the Result on clearing search result
        Given The app is open on "localhost"
        When user click on people option
        When user seach for "a" in searchBar
        And  user click on search 
        And  user verifies results
        And  User clear the searchBar
        And  user click on search 
        Then User verify empty result       


 Scenario: To verify Enter key functionality for searching person
        Given The app is open on "localhost"
        When user click on people option
        And user seach for "a" in searchBar
        And  User press Enter key
        Then user is displayed with "<characters>" results
        

Second : planetSearch.feature

Scenario Outline: planets search 
 
        Given The app is open on "localhost"
        When user click on planets option
        When user seach for "<characters>" in searchBar
        And  user click on search 
        Then user is displayed with "<characters>" results
        And  Result displays Population for "<characters>" 
        And  Result displays Climate for "<characters>"
        And  Result displays Gravity for "<characters>"
        
    

       Examples: 
        | characters |
        | Alderaan |
        | Hoth |
     


Scenario: Search for planet using invalid character
        Given The app is open on "localhost"
        When user click on planets option
        And user seach for "@#!##@" in searchBar
        Then No search result displayed 


Scenario: Multiple result validation for partial character
        Given The app is open on "localhost"
        When user click on planets option
        When user seach for "b" in searchBar
        And  user click on search 
        Then user is displayed with multiple results
       

Scenario: To verify the Planets Result on clearing search result
        Given The app is open on "localhost"
        When user click on planets option
        And user seach for "b" in searchBar
        And  user click on search 
        And  user verifies results
        And  User clear the searchBar
        And  user click on search 
        Then User verify empty result   

 Scenario: To verify Enter key functionality for searching person
        Given The app is open on "localhost"
        When user click on planets option
        And user seach for "a" in searchBar
        And  User press Enter key
        Then user is displayed with "<characters>" results



Issues Found : 
1:TntAssignment website is not clearing Search result on empty search so one scenario fails as user clears the search bar and enter but still user is 
displayed with same search results
2:Issue was displayed in running the protractor.conf.js so i updated the file with
frameworkPath: require.resolve('protractor-cucumber-framework')
    
Reporting: 
*JSON report is created with all results in test-reports folder
*Added Configuration.ts to generate the HTML report after Json report is generated


## Remarks 

How to Run -->

Run protractor protractor.conf.js to run the E2E test or use 
Npm e2e or npm run e2e to run the protractor scenario's

