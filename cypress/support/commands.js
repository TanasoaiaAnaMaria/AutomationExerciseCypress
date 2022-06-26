Cypress.Commands.add("Launch_the_website",() => {
        //inserting the URL
        cy.visit('https://automationexercise.com/')
        //verify if the page title is Automation Exercise
        cy.title().should('eq','Automation Exercise')
        //verify the protocol of the page
        cy.location('protocol').should('eq','https:')
        //verify the title of the page
        cy.title().should('eq','Automation Exercise')
})

Cypress.Commands.add("LogIN_is_possible",() => {
        //Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        //Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
        //Verify 'Login to your account' is visible
        cy.contains('Login to your account').should('be.visible');
        //The credentials for login can be inserted
        cy.get('.login-form > form > [type="email"]').should('not.be.disabled');
        cy.get('.login-form > form > [type="email"]').should('not.be.disabled');
})

Cypress.Commands.add("Enter_correct_credentials",() => {
        //Enter correct email address and password
        cy.get('.login-form > form > [type="email"]').type('mariatest1511@yahoo.com');
        cy.get('[type="password"]').type('test123');
        //Click 'login' button
        cy.get('.login-form > form > .btn').click();
        //Verify that 'Logged in as username' is visible
        cy.contains('Logged in as Ana-Maria').should('be.visible');
})