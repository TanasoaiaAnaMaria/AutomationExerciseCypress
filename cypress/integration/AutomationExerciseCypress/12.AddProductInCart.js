describe("Add Products In Cart", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        var price = [];
        var totalPrice=0;
        //3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        // 4. Click 'Products' button
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        // 5. Hover over first product and click 'Add to cart'
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2').then(($pr) =>{
            price.push($pr.text());
        })
        // 6. Click 'Continue Shopping' button
        cy.get('.modal-footer > .btn').click();

        // 7. Hover over second product and click 'Add to cart'
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        //save the price of product
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > h2').then(($pr) =>{
            price.push($pr.text());
        })
        // 8. Click 'View Cart' button
        cy.get('u').click();
        // 9. Verify both products are added to Cart
        cy.get('tbody [id*=product-]').each((item, index, list) => {
            //console.log(list);
            expect(list).to.have.length(2);
        }) 
        // 10. Verify their prices, quantity and total price
        
        cy.get('td.cart_price').each((item, index, list) => {
            cy.wrap(list[index]).should("contain.text",price[index]);
        })  

        cy.get('td.cart_quantity').each((item, index, list) => {
            cy.wrap(list[index]).should("contain.text",1);
        }) 

        cy.get('#product-1 > .cart_total > .cart_total_price').should('contain.text','Rs. 500');
        cy.get('#product-2 > .cart_total > .cart_total_price').should('contain.text','Rs. 400');
          //console.log(price);

    })
})