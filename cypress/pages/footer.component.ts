class FooterComponent {
    elements = {
        // Social links loactors
        linkedinIcon: () => cy.get('a[href*="linkedin.com"]'),
        twitterIcon: () => cy.get('a[href*="https://x.com"]'),
        facebookIcon: () => cy.get('a[href*="facebook.com"]'),
        logoIcon: () => cy.get('footer').find('svg[aria-hidden="true"]').eq(0)
    }

    verifyLinkedin() {
        this.elements.linkedinIcon()
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.linkedin.com/company/telnyx')

    }

    verifyTwitter() {
        this.elements.twitterIcon()
            .should('be.visible')
            .and('have.attr', 'href', 'https://x.com/telnyx')
    }

    verifyFacebook() {
        this.elements.facebookIcon()
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.facebook.com/Telnyx/')
    }
}

export default FooterComponent