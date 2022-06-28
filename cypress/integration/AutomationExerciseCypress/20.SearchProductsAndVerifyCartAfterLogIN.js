describe("Search Products And Verify Cart After LogIN", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        var nr = 0;
        // 3. Click on 'Products' button
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        // 4. Verify user is navigated to ALL PRODUCTS page successfully
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.url().should('include', '/products');
        // 5. Enter product name in search input and click search button
        cy.get('#search_product').type('Top');
        cy.get('.col-sm-4').each((item, index, list) => {
            if(index>0)
            {
                cy.wrap(list[index]).then(($rasp)=>{
                    if($rasp.text().includes('Top'))
                        nr++;
                })
            }
        })
        
        cy.get('#submit_search').click();
        // 6. Verify 'SEARCHED PRODUCTS' is visible
        cy.contains('Searched Products');
        // 7. Verify all the products related to search are visible
        
        cy.get('.col-sm-4').each((item, index, list) => {
            if(index>0 && nr!=0)
                {
                    cy.wrap(list[index]).should('be.visible');
                    nr--;
                }
        }) 
        // 8. Add those products to cart
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        // 9. Click 'Cart' button and verify that products are visible in cart
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('tbody [id*=product-]').each((item, index, list) => {
            //console.log(list);
            expect(list).to.have.length(1);
        }) 
        // 10. Click 'Signup / Login' button and submit login details
        cy.Signup();
        // 11. Again, go to Cart page
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        // 12. Verify that those products are visible in cart after login as well
        cy.get('tbody [id*=product-]').each((item, index, list) => {
            //console.log(list);
            expect(list).to.have.length(1);
        }) 

    })
})