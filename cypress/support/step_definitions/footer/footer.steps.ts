import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import FooterComponent  from "../../../pages/footer.component"


const footerComponent = new FooterComponent()


When("I click on the footer logo", () => {
    footerComponent.elements.logoIcon().click()
})

Then("I should see {string} icon and it should lead to the right external page", (socialMedia: string) => {
    switch (socialMedia) {
        case "Twitter":
            footerComponent.verifyTwitter()
            break
        case "Facebook":
            footerComponent.verifyFacebook()
            break
        case "Linkedin":
            footerComponent.verifyLinkedin()
            break
    }
})
