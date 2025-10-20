import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import ContactUsPage from "../../../pages/contactUs.page"
import {faker} from "@faker-js/faker"
import endpoints from "../../../constants/endpoints.constants.json"


const contactUsPage = new ContactUsPage()


When("I leave all required fields empty", () => {
    contactUsPage.elements.selectDropdown().select("Select")
    contactUsPage.elements.firstnameInput().clear()
    contactUsPage.elements.lastnameInput().clear()
    contactUsPage.elements.emailInput().clear()
    contactUsPage.elements.websiteInput().clear()
    contactUsPage.elements.hearAboutInput().clear()
})

When("I click the submit button", () => {
        contactUsPage.submitButtonClick()
})

Then("I should see {string} field with red borders and error message under it", (input: string) => {
    switch (input) {
        case "Select":
            contactUsPage.elements.selectDropdown()
                .should('have.css', 'border-color', 'rgb(235, 0, 0)')

            contactUsPage.elements.invalidDropdownSelectMessage()
                .should('be.visible')
                .and('contain.text', 'This field is required.')
            break
        case "Email":
            contactUsPage.elements.emailInput()
                .should('have.css', 'border-color', 'rgb(235, 0, 0)')

            contactUsPage.elements.invalidEmailMessage()
                .should('be.visible')
            break
    }
})

When("I fill the required fields with valid data", () => {
    contactUsPage.elements.selectDropdown().select("Support")
    contactUsPage.elements.firstnameInput().type(faker.person.firstName())
    contactUsPage.elements.lastnameInput().type(faker.person.lastName())
    contactUsPage.elements.emailInput().type(faker.internet.email())
    contactUsPage.elements.websiteInput().type(faker.internet.domainName())
    contactUsPage.elements.additionalInfoInput().type(faker.lorem.paragraph(5))
    contactUsPage.elements.hearAboutInput().type(faker.lorem.paragraph(5))
})

When("I refresh the page", () => {
    cy.reload()
})

Then("I should see empty input fields", () => {
    contactUsPage.elements.selectDropdown().should('have.value', '')
    contactUsPage.elements.firstnameInput().should('have.value', '')
    contactUsPage.elements.lastnameInput().should('have.value', '')
    contactUsPage.elements.emailInput().should('have.value', '')
    contactUsPage.elements.websiteInput().should('have.value', '')
    contactUsPage.elements.hearAboutInput().should('have.value', '')
})

//3
Then("I should be redirected to the 'thank-you-support' page", () => {
    cy.url().should('include', `/${endpoints.successfulSubmitting}`)
})

When("I fill the required fields, except password, with valid data", () => {
    const username = faker.internet.username()
    const invalidEmails = [
        `${username}@`,
        `${username}?example`,
        `${username}@@example.com`
    ]

    contactUsPage.elements.selectDropdown().select("Support")
    contactUsPage.elements.firstnameInput().type(faker.person.firstName())
    contactUsPage.elements.lastnameInput().type(faker.person.lastName())
    contactUsPage.elements.emailInput().type(faker.helpers.arrayElement(invalidEmails)) //pick random invalid email from array invalidEmails
    contactUsPage.elements.websiteInput().type(faker.internet.domainName())
    contactUsPage.elements.additionalInfoInput().type(faker.lorem.paragraph(5))
    contactUsPage.elements.hearAboutInput().type(faker.lorem.paragraph(5))
})
