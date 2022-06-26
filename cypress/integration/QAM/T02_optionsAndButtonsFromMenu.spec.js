describe("OptionsAndButtonsFromMenu" , function(){
    it("OptionsAndButtonsFromMenu",function(){
        //inserting the URL
        cy.visit('https://assist-devqa.netlify.app')
        //check if navbar contains all required elements 
        cy.get('.nav-panel').find('a').first().should('have.text','Home')
        cy.get('.nav-panel').find('a').eq(1).should('have.text','BIM 2021')
        cy.get('.nav-panel').find('a').eq(2).should('have.text','Regulations')
        cy.get('.nav-panel').find('a').eq(3).should('have.text','History')
        cy.get('.more-action').find('.btn-nav').eq(0).should('have.text','Log In')
        cy.get('.more-action').find('.btn-nav').eq(1).should('have.text','Apply Now')
    })
})