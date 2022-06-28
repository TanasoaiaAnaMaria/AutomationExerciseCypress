describe("Verify Address Details In Checkout Page", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        // 3. Verify that home page is visible successfully
        //  4. Click 'Signup / Login' button
        //  5. Fill all details in Signup and create account
        //  6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        //  7. Verify ' Logged in as username' at top
        cy.Signup();
        //  8. Add products to cart
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        //  9. Click 'Cart' button
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        //  10. Verify that cart page is displayed
        cy.url().should('include', '/view_cart');
        //  11. Click Proceed To Checkout
        cy.get('.col-sm-6 > .btn').click();
        //  12. Verify that the delivery address is same address filled at the time registration of account
        cy.get('#address_delivery > .address_firstname').contains('Mrs. Tanasoaia Ana-Maria');
        cy.get('#address_delivery > :nth-child(3)').contains('-');
        cy.get('#address_delivery > :nth-child(4)').contains('-');
        cy.get('#address_delivery > :nth-child(5)').contains('-');
        cy.get('#address_delivery > .address_country_name').contains('Israel');
        cy.get('#address_delivery > .address_phone').contains('1234567894');
        cy.contains('Review Your Order');
        //  13. Verify that the billing address is same address filled at the time registration of account
        cy.get('#address_invoice > .address_firstname').contains('Mrs. Tanasoaia Ana-Maria');
        cy.get('#address_invoice > :nth-child(3)').contains('-');
        cy.get('#address_invoice > :nth-child(4)').contains('-');
        cy.get('#address_invoice > :nth-child(5)').contains('-');
        cy.get('#address_invoice > .address_country_name').contains('Israel');
        cy.get('#address_invoice > .address_phone').contains('1234567894');
        cy.contains('Review Your Order');
        //  14. Click 'Delete Account' button
        //  15. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    })
})