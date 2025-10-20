import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import Error404Page from "../../../pages/error404.page"
import {faker} from "@faker-js/faker"
import errorMessages from "../../../constants/errors.constants.json"


const error404Page = new Error404Page()


When('I open page with non-existent endpoint', ( ) => {
    const fakePage = '/' + faker.lorem.word() + '/' + faker.lorem.word()

    //intercept HTTP GET request to the randomly generated page
    cy.intercept('GET', fakePage).as('404Page')

    //visit the non-existent page without failing test
    cy.visit(fakePage, { failOnStatusCode: false })

    //verify that the response status code is 404 (Not Found)
    cy.wait('@404Page').its('response.statusCode').should('eq', 404)

})

Then('I should see custom error404 Page and an error message with back to home button', () => {
    error404Page.elements.errorMessage()
        .should("be.visible")
        .and("have.text", errorMessages.error404Message)

    error404Page.elements.errorSubMessage()
        .should("be.visible")
        .and("have.text", errorMessages.error404SubMessage)

    error404Page.elements.backToHomeButton()
        .should("be.visible")

})

When('I click the "back to home" button', () => {
    error404Page.elements.backToHomeButton().click()

})


