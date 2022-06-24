Cypress.Commands.add("LogIN",()=>{
        
        cy.get('.btn-nav').contains('Log In').click()
        cy.get('.btn-login').contains('Login with your existing account').click()
        cy.get('input[name="email"]').type('user10@test.com')
        cy.get('input[name="password"]').type('user123456')
        cy.get('.submit-btn').contains('Log In as a member').click()
})