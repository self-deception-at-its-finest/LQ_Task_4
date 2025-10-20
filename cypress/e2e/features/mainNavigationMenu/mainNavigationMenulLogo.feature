Feature: Main navigation menu
  Scenario: Verify logo functionality in the main navigation menu
    Given I am on the 'Home' page
    When I click on the header logo
    Then I should return to homepage
