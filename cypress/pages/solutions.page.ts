import endpoints from '../constants/endpoints.constants.json'
import BasePage from "./base.page"


class SolutionsPage extends BasePage {
    endpoint = endpoints.solutions
    elements = {
        filterSearch: () => cy.get('#search'),
        searchResults: () => cy.get('li>div>div>h3')

    }
    /**
     * Checks the search filter functionality
     * @param {string} message - Search query to enter into the filter
     * @returns {void}
     *
     * @example
     * // Check search for the word "SMS"
     * checkSearchFilter("SMS")
     *
     * @description
     * Function Verifies that each result contains the search text
     */
    checkSearchResults(message: string): void {
        this.elements.searchResults()
            .should('have.length.greaterThan', 0)
            .each(($element) => {
                cy.wrap($element)
                    .invoke('text')
                    .then((text) => {
                        expect(text.toLowerCase()).to.include(message.toLowerCase())
                    })

            })
    }

    open() {
        super.open(this.endpoint)
    }
}
export default SolutionsPage