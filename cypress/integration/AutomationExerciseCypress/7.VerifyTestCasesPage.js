describe("Test Cases Page", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        //3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        //4. Click on 'Test Cases' button
        cy.get('.shop-menu > .nav > :nth-child(5)').click();
        //5. Verify user is navigated to test cases page successfully
        cy.contains('Test Cases');

    })
})