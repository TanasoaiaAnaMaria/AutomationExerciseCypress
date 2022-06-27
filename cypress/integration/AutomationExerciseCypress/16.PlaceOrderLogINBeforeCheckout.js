describe("Add Products In Cart", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        var price = [];
        var totalPrice=0;
        // 3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        // 4. Click 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        // 5. Fill email, password and click 'Login' button
        cy.get('.login-form > form > [type="email"]').type('mariatest1511@yahoo.com');
        cy.get('[type="password"]').type('test123');
        cy.get('.login-form > form > .btn').click();
        // 6. Verify 'Logged in as username' at top
        cy.contains('Logged in as Ana-Maria');
        // 7. Add products to cart
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        // 8. Click 'Cart' button
        cy.get('.shop-menu > .nav > :nth-child(3)').click();
        // 9. Verify that cart page is displayed
        cy.url().should('include', '/view_cart')
        // 10. Click Proceed To Checkout
        cy.get('.col-sm-6 > .btn').click();
        // 11. Verify Address Details and Review Your Order
        cy.get('#address_delivery > .address_firstname').contains('Mrs. Tanasoaia Ana-Maria');
        cy.get('#address_delivery > :nth-child(3)').contains('-');
        cy.get('#address_delivery > :nth-child(4)').contains('-');
        cy.get('#address_delivery > :nth-child(5)').contains('-');
        cy.get('#address_delivery > .address_country_name').contains('Israel');
        cy.get('#address_delivery > .address_phone').contains('1234567894');
        cy.contains('Review Your Order');
        // 12. Enter description in comment text area and click 'Place Order'
        cy.get('.form-control').type('test');
        cy.get(':nth-child(7) > .btn').click();
        // 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        cy.get(':nth-child(2) > .col-sm-12 > .form-control').type('123456781234');
        cy.get(':nth-child(3) > .col-sm-12 > .form-control').type('1234');
        cy.get('.cvc > .form-control').type('12');
        cy.get(':nth-child(2) > .form-control').type('123');
        cy.get(':nth-child(3) > .form-control').type('10');
        // 14. Click 'Pay and Confirm Order' button
        cy.get('#submit').click();
        // 15. Verify success message 'Your order has been placed successfully!'
        //cy.get('#success_message > .alert-success').should('contain.text','Your order has been placed successfully!');
        cy.contains('Order Placed!');
        // 16. Click 'Delete Account' button
        // 17. Verify 'ACCOUNT DELETED!' and click 'Continue' button  
    })
})