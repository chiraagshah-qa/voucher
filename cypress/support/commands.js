Cypress.Commands.add('checkHomePageLoads', () => {
    it('Check VoucherCode is running.', () => {
        //Check server is responding with 200 status
        cy.request('https://www.vouchercodes.co.uk')
        .should((response) => {
            expect(response.status).to.eq(200)
        })
        //Check website loads, with at least 1 visible item.
        // cy.visit('https://www.vouchercodes.co.uk')
        cy.title().should('eq','VoucherCodes - Exclusive Discount Codes & Vouchers')
        cy.get('[data-qa="el:homePageBannerSubText"]').should('be.visible')
    })
})

Cypress.Commands.add('checkRestDealsPageLoads', () => {
        //Check server is responding with 200 status
        cy.request('https://www.vouchercodes.co.uk/restaurant-vouchers.html')
        .should((response) => {
            expect(response.status).to.eq(200)
        })
        //Check URL has changed
        cy.url().should('be.equal', 'https://www.vouchercodes.co.uk/restaurant-vouchers.html')
        //Check Restaurant Bannner element is visible and contains certain text
        cy.get('[data-qa="el:restaurantBanner"]').should('be.visible')
        .get('[data-qa="el:restaurantHeading"]').should('have.text','\n    Find restaurant vouchers & offers near you\n  ')
})