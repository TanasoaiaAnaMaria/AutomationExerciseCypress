describe("View Category Products", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        // 3. Verify that categories are visible on left side bar
        cy.get('.left-sidebar > :nth-child(1)').should("contain.text",'Category');
        // 4. Click on 'Women' category
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
        // 5. Click on any category link under 'Women' category, for example: Dress
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
        // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
        cy.url().should('include', '/category_products')
        cy.get('.title').should("contain.text",'Women - Dress Products');
        // 7. On left side bar, click on any sub-category link of 'Men' category
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click();
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
        // 8. Verify that user is navigated to that category page
        cy.url().should('include', '/category_products/3');
        cy.get('.title').should("contain.text",'Men - Tshirts Products');

    })
})