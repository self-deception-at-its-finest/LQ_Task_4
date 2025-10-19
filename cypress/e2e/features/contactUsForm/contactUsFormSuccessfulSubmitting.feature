Feature: Contact Us Form
  Scenario: Successful submitting of the “Contact Us” form with valid required fields
    Given I am on the 'Contact Us' page
    When I fill the required fields with valid data
    When I click the submit button
    Then I should be redirected to the 'thank-you-support' page

