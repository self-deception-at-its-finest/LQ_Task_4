import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../pages/home.page";
import PricingPage from "../../../pages/pricing.page";
import ContactUsPage from "../../../pages/contactUs.page";
import SolutionsPage from "../../../pages/solutions.page";
import CustomerStoriesPage from "../../../pages/customerStories.page";


const homePage = new HomePage()
const pricingPage = new PricingPage()
const contactUsPage = new ContactUsPage()
const solutionsPage = new SolutionsPage()
const customerStoriesPage = new CustomerStoriesPage()


Given("I am on the {string} page", (page:string) => {
    switch (page) {
        case "Home":
            homePage.open()
            break
        case "Contact Us":
            contactUsPage.open()
            break
        case "Pricing":
            pricingPage.open()
            break
        case "Solutions":
            solutionsPage.open()
            break
        case "Customer Stories":
            customerStoriesPage.open()
            break
    }
})

When("I scroll to the footer", () => {
    cy.scrollTo('bottom')
})

Then("I should return to homepage", () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/')
})