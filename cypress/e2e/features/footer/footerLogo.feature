Feature: Footer
  Scenario: Verify logo functionality
    Given I am on the 'Pricing' page
    When I scroll to the footer
    When I click on the footer logo
    Then I should return to homepage
