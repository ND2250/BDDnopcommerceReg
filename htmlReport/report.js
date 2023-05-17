$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Nishant Dhanani/IdeaProjects/SimpleBDDnopreg/src/test/resources/Features/A_Register.Feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Registration",
  "description": "",
  "id": "nopcommerce-registration",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User able to open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter an url",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_able_to_open_a_browser()"
});
formatter.result({
  "duration": 11232901900,
  "status": "passed"
});
formatter.match({
  "location": "Register.enter_an_url()"
});
formatter.result({
  "duration": 5244864600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#Simple HardCoded Scenario"
    }
  ],
  "line": 8,
  "name": "Nopcommerce valid registration test",
  "description": "",
  "id": "nopcommerce-registration;nopcommerce-valid-registration-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user on Register page and verify the register page title",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user select a gender",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter a First name Lastname and date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter a valid email address and company name",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enter a password and  confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_on_register_link()"
});
formatter.result({
  "duration": 1364834200,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_on_Register_page_and_verify_the_register_page_title()"
});
formatter.result({
  "duration": 15739200,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_select_a_gender()"
});
formatter.result({
  "duration": 122558200,
  "status": "passed"
});
formatter.match({
  "location": "Register.enter_a_First_name_Lastname_and_date_of_birth()"
});
formatter.result({
  "duration": 655345500,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_enter_a_valid_email_address_and_company_name()"
});
formatter.result({
  "duration": 325856300,
  "status": "passed"
});
formatter.match({
  "location": "Register.enter_a_password_and_confirm_password()"
});
formatter.result({
  "duration": 312651900,
  "status": "passed"
});
formatter.match({
  "location": "Register.click_on_register_button()"
});
formatter.result({
  "duration": 817879800,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_close_the_browser()"
});
formatter.result({
  "duration": 314728800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 18,
      "value": "# Simple Data driven with example"
    }
  ],
  "line": 20,
  "name": "NopCommerce valid registration test",
  "description": "",
  "id": "nopcommerce-registration;nopcommerce-valid-registration-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user on Register page and verify the register page title",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user select a \"\u003cGender\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "enter a \"\u003cfirstname\u003e\" \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "enter a \"\u003cDay\u003e\",\"\u003cMonth\u003e\" and \"\u003cYear\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user enter a valid \"\u003cEmail address\u003e\" and \"\u003cCompany name\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "enter a \"\u003cPassword\u003e\" and  \"\u003cConfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on \"\u003cRegister button\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "nopcommerce-registration;nopcommerce-valid-registration-test;",
  "rows": [
    {
      "cells": [
        "Gender",
        "firstname",
        "lastname",
        "Day",
        "Month",
        "Year",
        "Email address",
        "Company name",
        "Password",
        "Confirm password",
        "Register button"
      ],
      "line": 31,
      "id": "nopcommerce-registration;nopcommerce-valid-registration-test;;1"
    },
    {
      "cells": [
        "Male",
        "Nishant",
        "Dhanani",
        "13",
        "June",
        "1992",
        "nishant.dhanani@gmail.com",
        "ABC limited",
        "Ndnd2250",
        "Ndnd2250",
        "Register button"
      ],
      "line": 32,
      "id": "nopcommerce-registration;nopcommerce-valid-registration-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User able to open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter an url",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_able_to_open_a_browser()"
});
formatter.result({
  "duration": 2213514200,
  "status": "passed"
});
formatter.match({
  "location": "Register.enter_an_url()"
});
formatter.result({
  "duration": 3932159300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "NopCommerce valid registration test",
  "description": "",
  "id": "nopcommerce-registration;nopcommerce-valid-registration-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user on Register page and verify the register page title",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user select a \"Male\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "enter a \"Nishant\" \"Dhanani\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "enter a \"13\",\"June\" and \"1992\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user enter a valid \"nishant.dhanani@gmail.com\" and \"ABC limited\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "enter a \"Ndnd2250\" and  \"Ndnd2250\"",
  "matchedColumns": [
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "click on \"Register button\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_on_register_link()"
});
formatter.result({
  "duration": 993789200,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_on_Register_page_and_verify_the_register_page_title()"
});
formatter.result({
  "duration": 12219300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 15
    }
  ],
  "location": "Register.user_select_a(String)"
});
formatter.result({
  "duration": 136305800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nishant",
      "offset": 9
    },
    {
      "val": "Dhanani",
      "offset": 19
    }
  ],
  "location": "Register.enter_a(String,String)"
});
formatter.result({
  "duration": 330681800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 9
    },
    {
      "val": "June",
      "offset": 14
    },
    {
      "val": "1992",
      "offset": 25
    }
  ],
  "location": "Register.enter_a_and(String,String,String)"
});
formatter.result({
  "duration": 366669700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nishant.dhanani@gmail.com",
      "offset": 20
    },
    {
      "val": "ABC limited",
      "offset": 52
    }
  ],
  "location": "Register.user_enter_a_valid_and(String,String)"
});
formatter.result({
  "duration": 346012600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ndnd2250",
      "offset": 9
    },
    {
      "val": "Ndnd2250",
      "offset": 25
    }
  ],
  "location": "Register.enter_a_and(String,String)"
});
formatter.result({
  "duration": 240526800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register button",
      "offset": 10
    }
  ],
  "location": "Register.click_on(String)"
});
formatter.result({
  "duration": 105884300,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_close_the_browser()"
});
formatter.result({
  "duration": 238530900,
  "status": "passed"
});
});