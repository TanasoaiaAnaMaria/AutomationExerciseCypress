describe("ContactUsForm", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        //3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        //4. Click on 'Contact Us' button
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
        //5. Verify 'GET IN TOUCH' is visible
        cy.contains('Get In Touch').should('be.visible');
        //6. Enter name, email, subject and message
        cy.get(':nth-child(2) > .form-control').type('Tanasoaia Ana');
        cy.get(':nth-child(3) > .form-control').type('mariatest2000@yahoo.com');
        cy.get(':nth-child(4) > .form-control').type('test');
        cy.get('#message').type('Test message');
        cy.wait(500);
        //7. Upload file
        cy.get(':nth-child(6) > .form-control').selectFile("cypress/fixtures/test.docx");
        //8. Click 'Submit' button
        cy.get(':nth-child(7) > .btn').click();
        //9. Click OK button  ??????
        //10. Verify success message 'Success! Your details have been submitted successfully.' is visible
        cy.get('.status').contains('Success! Your details have been submitted successfully.');
        //11. Click 'Home' button and verify that landed to home page successfully
        cy.get('#form-section > .btn').click();
            //Verify that home page is visible successfully
            cy.get('a > img').should('be.visible');
            //verify the title of the page
            cy.title().should('eq','Automation Exercise');
    })
})