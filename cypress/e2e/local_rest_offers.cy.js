beforeEach(() => {
    cy.visit('https://www.vouchercodes.co.uk')
    cy.checkHomePageLoads()
})

describe('Get Local Restaurant Offers.', function() {
    it('Navigate to Restrauant Offers.', function() {
        cy.get('[data-qa="el:restaurantVouchersFooterLink"]').click()
        cy.checkRestDealsPageLoads()
    })

    it('Search for Restauants with valid Town/City.', function() {
        cy.get('[data-qa="el:restaurantVouchersFooterLink"]').click()
        cy.checkRestDealsPageLoads()
        cy.get('button').contains('Find restaurants vouchers').should('be.disabled')
        cy.get('[id="google-autocomplete"]').type('London', { delay: 1000 })
        .type('{downarrow}', { delay: 1000 })
        .type('{enter}')
        cy.get('[id="google-autocomplete"]').should('have.value', 'London, UK');
        //Check the find button is no longer disabled once a valid option is selected.
        cy.get('button').contains('Find restaurants vouchers').should('not.be.disabled')
        .click()
        //The verifications are based on searching at the time.
        cy.url().should('be.equal', 'https://www.vouchercodes.co.uk/restaurant-vouchers/search?lat=51.5072178&lng=-0.1275862&rl=London,%20UK')
        cy.get('[data-qa="el:infoBannerTitle"]').should('have.text', "Sorry, we couldn't find any offers that match your criteria")
    })

    it('Search for Restauants with valid Town/City - FAIL.', function() {
        cy.get('[data-qa="el:restaurantVouchersFooterLink"]').click()
        cy.checkRestDealsPageLoads()
        cy.get('button').contains('Find restaurants vouchers').should('be.disabled')
        cy.get('[id="google-autocomplete"]').type('London')
        .type('{downarrow}')
        .type('{enter}')
        //Check the find button is no longer disabled once a valid option is selected.
        cy.get('button').contains('Find restaurants vouchers').should('not.be.disabled')
        .click()
        
    })
})
