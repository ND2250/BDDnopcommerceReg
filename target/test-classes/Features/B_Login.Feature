Feature: Nopcommerce Login

  Background:
    Given User able to open a Browser
    And Enter an Url

    # Simple Data Driven Example
  @E2E
  Scenario Outline: Nopcommerce valid login test
    When user click on login link
    And user on login page
    Then user add an "<email ADDress>" and "<Passwords>"
    And click on Loginbutton
    Then close a browser
    Examples:
      |email ADDress|Passwords|
    |nishant.dhanani@gmail.com|Ndnd2250|

