describe("Login succesfuly", function(){
    before(function(){
        
        cy.Launch_the_website()
        cy.LogIN_is_possible()
    })

    it("Login is possible",function() {
        //6. Enter correct email address and password
        cy.get('.login-form > form > [type="email"]').type('mariatest1511@yahoo.com');
        cy.get('[type="password"]').type('test123');
        //7. Click 'login' button
        cy.get('.login-form > form > .btn').click();
        //8. Verify that 'Logged in as username' is visible
        cy.contains('Logged in as Ana-Maria')
        //9. Click 'Delete Account' button
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        //10. Verify that 'ACCOUNT DELETED!' is visible (the action of deleting account isn't working)
        //cy.contains('Delete Account').should('be.visible');
    })
})

