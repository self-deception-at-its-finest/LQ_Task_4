Feature: Error 404 Page
  Scenario: Verify "Back to Home" button functionality
    When I open page with non-existent endpoint
    When I click the "back to home" button
    Then I should return to homepage