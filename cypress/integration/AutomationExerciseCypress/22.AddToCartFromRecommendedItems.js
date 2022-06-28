describe("Add To Cart From Recommended Items", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        // 3. Scroll to bottom of page
        cy.get('#footer').scrollIntoView();
        // 4. Verify 'RECOMMENDED ITEMS' are visible
        cy.get('.recommended_items > .title').should('be.visible');
        // 5. Click on 'Add To Cart' on Recommended product
        cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        // 6. Click on 'View Cart' button
        cy.get('u').click();
        // 7. Verify that product is displayed in cart page
        cy.get('td.cart_description').each((item, index, list) => {
            cy.wrap(list[index]).should('be.visible');
        })
    })
})