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
        //6. Enter product name in search input and click search button
        cy.get('#search_product').type('Top');
        cy.get('#submit_search').click();
        //7. Verify 'SEARCHED PRODUCTS' is visible
        cy.contains('Searched Products');
        //8. Verify all the products related to search are visible
        cy.get('.features_items >*').each((item, index, list) => {
            console.log(list);
            for(var i = 2; i < list.length; i++) {
                cy.wrap(list[i]).should("contain.text",'Top');
            }
          }) 
    })
})