describe("View And Cart Brand Products", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        // 3. Click on 'Products' button
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        // 4. Verify that Brands are visible on left side bar
        cy.get('.brands_products > h2').should('contain.text','Brands')
        // 5. Click on any brand name
        cy.get('.brands-name > .nav > :nth-child(1) > a').click();
        // 6. Verify that user is navigated to brand page and brand products are displayed
        cy.url().should('include', 'brand_products/Polo');
        cy.get('.title').should("contain.text",'Brand - Polo Products');
        // 7. On left side bar, click on any other brand link
        cy.get('.brands-name > .nav > :nth-child(2) > a').click();
        // 8. Verify that user is navigated to that brand page and can see products
        cy.url().should('include', '/brand_products/H&M');
        cy.get('.title').should("contain.text",'Brand - H&M Products');
        cy.get('.col-sm-4').each((item, index, list) => {
            if(index>0)
                cy.wrap(list[index]).should('be.visible');
        }) 
    })
})