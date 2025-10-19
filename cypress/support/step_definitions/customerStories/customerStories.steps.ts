import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import CustomerStoriesPage from "../../../pages/customerStories.page"


const customerStoriesPage = new CustomerStoriesPage()


When("I scroll to the {string} customer story and click it", (customer:string) => {
    switch (customer) {
        case "Cosmo":
            customerStoriesPage.elements.cosmoCustomerStoryLink().scrollIntoView().click()
            break
        case "IvoryLab":
            customerStoriesPage.elements.ivoryLabCustomerStoryLink().scrollIntoView().click()
            break
        case "Cyber Telecom":
            customerStoriesPage.elements.cyberTelecomCustomerStoryLink().scrollIntoView().click()
            break

    }
})

Then("I should see the {string} customer story page", (customer:string) => {
    switch (customer) {
        case "Cosmo":
            cy.url().should("include", "/customer-stories/cosmo")
            break
        case "IvoryLab":
            cy.url().should("include", "/customer-stories/ivorylab")
            break
        case "Cyber Telecom":
            cy.url().should("include", "/customer-stories/cyber-telecom")
            break

    }
})