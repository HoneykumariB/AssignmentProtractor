Feature: Search for person using partial or complete charater

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
        