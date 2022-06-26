describe("Login failed", function(){
    before(function(){
        
        cy.Launch_the_website()
        cy.LogIN_is_possible()
    })

    it("Login is possible",function() {
        //6. Enter incorrect email address and password
        cy.get('.login-form > form > [type="email"]').type('mariatest1511@yahoo.com');
        cy.get('[type="password"]').type('test');
        //7. Click 'login' button
        cy.get('.login-form > form > .btn').click();
        //8. Verify error 'Your email or password is incorrect!' is visible
        cy.contains('Your email or password is incorrect!');
    })
})

