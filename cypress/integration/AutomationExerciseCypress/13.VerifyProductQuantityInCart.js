describe("Add Products In Cart", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        var price = [];
        var totalPrice=0;
        //3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        // 4. Click 'View Product' for any product on home page
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        // 5. Verify product detail is opened
        cy.url().should('include', '/product_details')
        // 6. Increase quantity to 4
        cy.get('#quantity').clear();
        cy.get('#quantity').type('4');
        // 7. Click 'Add to cart' button
        cy.get(':nth-child(5) > .btn').click();
        // 8. Click 'View Cart' button
        cy.get('u').click();
        // 9. Verify that product is displayed in cart page with exact quantity
        cy.get('.disabled').should("have.text",4);
    })
})