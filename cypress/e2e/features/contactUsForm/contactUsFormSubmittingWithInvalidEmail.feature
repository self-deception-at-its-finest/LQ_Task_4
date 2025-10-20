Feature: Contact Us Form
  Scenario: Submitting of the “Contact Us” form with invalid email
    Given I am on the 'Contact Us' page
    When I fill the required fields, except password, with valid data
    When I click the submit button
    Then I should see 'Email' field with red borders and error message under it

