describe("Add Review ON Product", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        var nr = 0;
        // 3. Click on 'Products' button
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        // 3. Click on 'Products' button
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        // 4. Verify user is navigated to ALL PRODUCTS page successfully
        cy.url().should('include', '/products');
        // 5. Click on 'View Product' button
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        // 6. Verify 'Write Your Review' is visible
        cy.get('.active > a').should('have.text','Write Your Review');
        // 7. Enter name, email and review
        cy.get('#name').type('Ana-Maria');
        cy.get('#email').type('mariatest1511@yahoo.com');
        cy.get('#review').type('test review');
        // 8. Click 'Submit' button
        cy.get('#button-review').click();
        // 9. Verify success message 'Thank you for your review.'
        cy.contains('Thank you for your review.');
    })
})