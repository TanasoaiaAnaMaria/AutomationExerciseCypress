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
        //Verify 'New User Signup!' is visible
        cy.contains('Login to your account').should('be.visible');
        //the credentials for login can be inserted
        cy.get('.login-form > form > [type="email"]').should('not.be.disabled');
        cy.get('.login-form > form > [type="email"]').should('not.be.disabled');
})