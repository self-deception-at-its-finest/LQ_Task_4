@ignore-exceptions
Feature: Use cases
  Scenario: Verify that Search filter for user cases at solutions page works properly
    Given I am on the 'Solutions' page
    When I type in Search field text 'SMS' and click Enter
    Then I should see search results including text 'SMS'
