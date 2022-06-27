describe("Test Products Page", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        //3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        //4. Click on 'Products' button
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        //5. Verify user is navigated to ALL PRODUCTS page successfully
        cy.contains('All Products');
        //6. The products list is visible
        cy.get('.features_items').should('be.visible');
        //7. Click on 'View Product' of first product
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        //8. User is landed to product detail page
        cy.url().should('include', '/product_details/1')
        //9. Verify that detailis visible: product name, category, price, availability, condition, brand
        cy.get('.product-information > h2').should('be.visible');
        cy.get('.product-information > :nth-child(3)').should('be.visible');
        cy.get(':nth-child(5) > span').should('be.visible');
        cy.get(':nth-child(6) > b').should('be.visible');
        cy.get(':nth-child(7) > b').should('be.visible');
        cy.get(':nth-child(8) > b').should('be.visible');

    })
})