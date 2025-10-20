Feature: Contact Us Form
  Scenario: Required fields validation in the “Contact Us” form'
    Given I am on the 'Contact Us' page
    When I leave all required fields empty
    When I click the submit button
    Then I should see 'Select' field with red borders and error message under it
