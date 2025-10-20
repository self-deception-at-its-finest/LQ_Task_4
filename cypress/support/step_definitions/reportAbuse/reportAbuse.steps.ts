import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import ContactUsPage from "../../../pages/contactUs.page"


const contactUsPage = new ContactUsPage()


When("I scroll down to the 'Related Resources' section", () => {
    cy.scrollTo('center')
})

Then("I should see the 'Report Abuse' button and it should lead to the report abuse page", () => {
    contactUsPage.elements.reportAbuseButton()
        .should('be.visible')
        .and('have.attr', 'href', Cypress.config().baseUrl + '/' + 'report-abuse')
})