describe("Remove Product From Cart", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        var desc = [];
        // 3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        // 4. Add products to cart
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p').then(($pr) =>{
            desc.push($pr.text());
        })
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.features_items > :nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p').then(($pr) =>{
            desc.push($pr.text());
        })
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        /* cy.get('.features_items > :nth-child(7) > .product-image-wrapper > .single-products > .productinfo > p').then(($pr) =>{
            desc.push($pr.text());
        }) */
        // 5. Click 'Cart' button
        cy.get('.shop-menu > .nav > :nth-child(3)').click();
        // 6. Verify that cart page is displayed
        cy.url().should('include', '/view_cart')
        // 7. Click 'X' button corresponding to particular product
        cy.get('#product-5 > .cart_delete > .cart_quantity_delete').click();
        // 8. Verify that product is removed from the cart  
        cy.wait(1500)
        cy.get('tbody [id*=product-]').each((item, index, list) => {
            cy.wrap(list[index]).should("contain.text",desc[index]);
        }) 
        cy.get('tbody [id*=product-]').then((list) => {
            //console.log(list);
            expect(list).to.have.length(2);
        })
    })
})