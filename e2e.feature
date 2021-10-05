Feature: Demo

  Scenario: Demo

    Given selectors
    """
    "X": "//option[text()='Unavailable']"
    """

    Given browser "Chrome"
    When I open "http://google.com"
    And I put total count of "X" into "x"
    Then the value of "x" should be equal to 8