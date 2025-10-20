import endpoints from '../constants/endpoints.constants.json'
import BasePage from "./base.page"


class CustomerStoriesPage extends BasePage {
    endpoint = endpoints.customerStories
    elements = {
        cosmoCustomerStoryLink: () => cy.get('a[href*="customer-stories/cosmo"]'),
        ivoryLabCustomerStoryLink: () => cy.get('a[href*="customer-stories/ivorylab"]'),
        cyberTelecomCustomerStoryLink: () => cy.get('a[href*="customer-stories/cyber-telecom"]')
    }

    open() {
        super.open(this.endpoint)
    }
}
export default CustomerStoriesPage