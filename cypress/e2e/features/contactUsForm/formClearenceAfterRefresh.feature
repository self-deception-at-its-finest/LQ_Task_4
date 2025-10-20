Feature: Contact Us Form
  Scenario: Verify Contact Form Fields Are Cleared After Page Refresh
    Given I am on the 'Contact Us' page
    When I fill the required fields with valid data
    When I refresh the page
    Then I should see empty input fields
