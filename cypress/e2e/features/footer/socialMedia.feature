Feature: Footer
    Background:
      Given I am on the 'Home' page

  Scenario: Verify Twitter icon and link in the footer
    When I scroll to the footer
    Then I should see "Twitter" icon and it should lead to the right external page

  Scenario: Verify Facebook icon and link in the footer
    When I scroll to the footer
    Then I should see "Facebook" icon and it should lead to the right external page

  Scenario: Verify Linkedin icon and link in the footer
    When I scroll to the footer
    Then I should see "Linkedin" icon and it should lead to the right external page

