describe("Login succesfuly", function(){
    before(function(){
        cy.Launch_the_website()
        cy.LogIN_is_possible()
        cy.Enter_correct_credentials()
    })

    it("Logout",function() {
        //9. Click 'Logout' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        //10. Verify that user is navigated to login page
        cy.contains('Login to your account').should('be.visible');
    })
})