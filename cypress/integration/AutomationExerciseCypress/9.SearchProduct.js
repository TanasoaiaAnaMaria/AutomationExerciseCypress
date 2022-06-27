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
        /* cy.get('.features_items').find('.col-sm-4').should('have.length', 14)
        cy.get('.features_items').find('.col-sm-4').contains('Blue'); */
/* 
        cy.get('.features_items')
        .find('.col-sm-4')
        .then(product => {
            expect(product).contains('Blue');
        });  */


        /*  cy.get('.col-sm-4').its('length')
        .then(size => {
            for(var i= 0; i < size; i++) {
                cy.get('div').children('div').to.contains('Blue');
            }
          }) */
 
        /* cy.get(".col-sm-4").should($items => { 
            for(var i = 0; i < $items.length; i++) {
                cy.get($items[i]).contains('Blue');
            }
        })  */


        cy.get('.features_items >*').each((item, index, list) => {
            console.log(list);
            //cy.get($el).contains('Blue');

            for(var i = 2; i < list.length; i++) {
                cy.wrap(list[i]).should("contain.text",'Top');
            }
          }) 


          
    })
})