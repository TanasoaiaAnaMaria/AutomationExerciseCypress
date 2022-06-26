describe("Logout" , function(){
    before('login',function(){
        cy.LogIN()
    })

    it("logout",function(){
        cy.get('.logged-menu').should('be.visible').click()
        cy.get('.dropdown-child').contains('Log out').click()
    })

})