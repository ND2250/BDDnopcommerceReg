Feature: NopCommerce Registration

  Background:
    Given User able to open a browser
    And Enter an url

  #Simple HardCoded Scenario
    Scenario: Nopcommerce valid registration test
        When user click on register link
        Then user on Register page and verify the register page title
        Then user select a gender
        And enter a First name Lastname and date of birth
        Then user enter a valid email address and company name
        And enter a password and  confirm password
        And click on register button
        Then user close the browser

  # Simple Data driven with example

  Scenario Outline: NopCommerce valid registration test
    When user click on register link
    Then user on Register page and verify the register page title
    Then user select a "<Gender>"
    And enter a "<firstname>" "<lastname>"
    Then enter a "<Day>","<Month>" and "<Year>"
    Then user enter a valid "<Email address>" and "<Company name>"
    And enter a "<Password>" and  "<Confirm password>"
    And click on "<Register button>"
    Then user close the browser
    Examples:
      | Gender | firstname | lastname | Day| Month | Year | Email address | Company name | Password | Confirm password | Register button |
      | Male   | Nishant   | Dhanani  | 13 | June   | 1992 | nishant.dhanani@gmail.com | ABC limited | Ndnd2250 | Ndnd2250 | Register button |






