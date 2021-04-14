Feature: Search for Planet using partial or complete charater to get valid or no result


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