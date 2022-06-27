describe("Subscription In Home Page", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        //3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        //4. Scroll down to footer
        cy.get('#footer').scrollIntoView();
        //5. Verify text 'SUBSCRIPTION'
        cy.get('.single-widget > h2').should("contain.text",'Subscription');
        //6. Enter email address in input and click arrow button
        cy.get('#susbscribe_email').type('mariatest2000@yahoo.com');
        cy.get('#subscribe').click();
        //7. Verify success message 'You have been successfully subscribed!' is visible
        cy.get('.alert-success').should("contain.text",'You have been successfully subscribed!');
        cy.get('.alert-success').should('be.visible');
    })
})