import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HeaderComponent from "../../../pages/header.component";


const headerComponent = new HeaderComponent()

When('I click on the header logo', () => {
    headerComponent.elements.headerLogo().click()
})

When('I click on {string} in the main navigation menu', (button: string) => {
    switch (button) {
        case "Products":
            headerComponent.elements.productsButton().click()
            break
        case "Solutions":
            headerComponent.elements.solutionsButton().click()
            break
        case "Why Telnyx":
            headerComponent.elements.whyTelnyxButton().click()
            break
        case "Resources":
            headerComponent.elements.resourcesButton().click()
            break
        case "Developers":
            headerComponent.elements.developersButton().click()
            break
    }
})

Then('I should see {string} dropdown', (button: string) => {
    switch (button) {
        case "Products":
            headerComponent.elements.productsButtonDropdown().should('be.visible')
            break
        case "Solutions":
            headerComponent.elements.solutionsButtonDropdown().should('be.visible')
            break
        case "Why Telnyx":
            headerComponent.elements.whyTelnyxButtonDropdown().should('be.visible')
            break
        case "Resources":
            headerComponent.elements.resourcesButtonDropdown().should('be.visible')
            break
        case "Developers":
            headerComponent.elements.developersButtonDropdown().should('be.visible')
            break
    }
})





