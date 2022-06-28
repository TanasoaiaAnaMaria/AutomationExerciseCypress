describe("Verify Scroll Up Without Arrow Button And Scroll Down Functionality", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        // 3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        // 4. Scroll down page to bottom
        cy.get('#footer').scrollIntoView();
        // 5. Verify 'SUBSCRIPTION' is visible
        cy.get('.single-widget > h2').should('be.visible');
        // 6. Scroll up page to top
        cy.get('#header').scrollIntoView();
        // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
        cy.get('.active > :nth-child(1) > h2').should('be.visible');
    })
})