Feature: Main navigation menu
  Background:
    Given I am on the 'Home' page

  Scenario: Verify dropdown menu appears when clicking on Products button
    When I click on "Products" in the main navigation menu
    Then I should see "Products" dropdown

  Scenario: Verify dropdown menu appears when clicking on Solutions button
    When I click on "Solutions" in the main navigation menu
    Then I should see "Solutions" dropdown

  Scenario: Verify dropdown menu appears when clicking on Why Telnyx button
    When I click on "Why Telnyx" in the main navigation menu
    Then I should see "Why Telnyx" dropdown

  Scenario: Verify dropdown menu appears when clicking on Resources button
    When I click on "Resources" in the main navigation menu
    Then I should see "Resources" dropdown

  Scenario: Verify dropdown menu appears when clicking on Developers button
    When I click on "Developers" in the main navigation menu
    Then I should see "Developers" dropdown
