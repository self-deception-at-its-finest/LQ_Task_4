import { When, Then, Before } from "@badeball/cypress-cucumber-preprocessor"
import SolutionsPage from "../../../pages/solutions.page"


const solutionsPage = new SolutionsPage()


Before({ tags: '@ignore-exceptions' }, () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

When('I type in Search field text {string} and click Enter', (word:string ) => {
    cy.wait(5000)

    solutionsPage.elements.filterSearch()
        .scrollIntoView()
        .clear()
        .should('not.be.disabled')
        .type(`${word}{enter}`,  { force: true })

    cy.wait(5000)

    solutionsPage.elements.filterSearch().should('have.value', word )
})

Then('I should see search results including text {string}', (subtext: string) => {
    solutionsPage.checkSearchResults(subtext)
})


