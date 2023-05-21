Feature: Buying a camara on Nopcommerce

  Background:
    Given USER ABLE TO OPEN A BROWSER
    And  ENTER A URL

     @Purchase
    Scenario Outline: Purchase a Camara via Nopcommerce
      When User click on electronic items
      And Click on Camaras photos And Select a Nikon
      Then Add on cart click on shopping basket click on terms and condition
      And click on checkout
      Then insert an "<emailaddress>" "<password>"
      And close the Browser
      Examples:
        | emailaddress | password |
      |nishant.dhanani@gmail.com|Ndnd@2250|



