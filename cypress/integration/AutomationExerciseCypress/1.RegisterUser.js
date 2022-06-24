describe("Open", function(){
    it("open",function() {
        //inserting the URL
        cy.visit('https://automationexercise.com/')
        //verify if the page title is Automation Exercise
        cy.title().should('eq','Automation Exercise')
        //verify the protocol of the page
        cy.location('protocol').should('eq','https:')
        //verify the title of the page
        cy.title().should('eq','Automation Exercise')
        //3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        //4. Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
        //5. Verify 'New User Signup!' is visible
        cy.contains('New User Signup!').should('be.visible');
        //6. Enter name and email address
        cy.get('input[type="text"]').type('Ana-Maria');
        cy.get('.signup-form > form > [type="email"]').type('mariatest2410@yahoo.com');
        //7. Click 'Signup' button
        cy.get('.signup-form > form > .btn').click();
        //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.contains('Enter Account Information').should('be.visible');
        //9. Fill details: Title, Name, Email, Password, Date of birth
        cy.get('#id_gender2').check();
        cy.get('#name').should('have.value','Ana-Maria');
        cy.get('#email').should('have.value','mariatest2410@yahoo.com');
        cy.get('#email').should('have.disabled','disabled');
        cy.get('#password').type('test123');
        cy.get('#days').select(24);
        cy.get('#months').select('October');
        cy.get('#years').select('2000');
        //10. Select checkbox 'Sign up for our newsletter!'
        cy.get('#newsletter').check;
        //11. Select checkbox 'Receive special offers from our partners!'
        cy.get('#optin').check;
        //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        cy.contains('Address Information').should('be.visible');
        cy.get('#first_name').type('Tanasoaia');
        cy.get('#last_name').type('Ana-Maria');
        cy.get('#company').type('-');
        cy.get('#address1').type('-');
        cy.get('#address2').type('-');
        cy.get('#country').select('Israel');
        cy.get('#state').type('-');
        cy.get('#city').type('-');
        cy.get('#zipcode').type('-');
        cy.get('#mobile_number').type('1234567894');
        //13. Click 'Create Account button'
        cy.get('.login-form > form > .btn').click();
        //14. Verify that 'ACCOUNT CREATED!' is visible
        cy.contains('Account Created!').should('be.visible');
        //15. Click 'Continue' button
        cy.get('.pull-right > .btn').click();
        //16. Verify that 'Logged in as username' is visible
        cy.contains('Logged in as Ana-Maria')
        //17. Click 'Delete Account' button
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        //cy.contains('Delete Account').should('be.visible');

        
    })
})