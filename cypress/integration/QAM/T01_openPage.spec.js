describe("Open", function(){
    it("open",function() {
        //inserting the URL
        cy.visit('https://assist-devqa.netlify.app')
        //verify if the page title is BIM
        cy.title().should('eq','BIM')
        //verify the protocol of the page
        cy.location('protocol').should('eq','https:')
        
    })
})