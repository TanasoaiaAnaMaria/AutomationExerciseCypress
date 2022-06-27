describe("Register Existing User", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {

        cy.get('a > img').should('be.visible');
        //4. Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
        //5. Verify 'New User Signup!' is visible
        cy.contains('New User Signup!').should('be.visible');
        //6. Enter name and email address
        cy.get('input[type="text"]').type('Ana-Maria');
        cy.get('.signup-form > form > [type="email"]').type('mariatest1511@yahoo.com');
        //7. Click 'Signup' button
        cy.get('.signup-form > form > .btn').click();
        //8. Verify error 'Email Address already exist!' is visible
        cy.contains('Email Address already exist!').should('be.visible');
        
    })
})