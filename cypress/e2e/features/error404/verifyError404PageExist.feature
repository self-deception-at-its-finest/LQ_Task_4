Feature: Error 404 Page
  Scenario: Verify 404 Error Page Handling for Non-Existent endpoints
    When I open page with non-existent endpoint
    Then I should see custom error404 Page and an error message with back to home button