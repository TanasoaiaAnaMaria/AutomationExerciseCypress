describe("Place Order Register While Checkout", function(){
    before(function(){
        cy.Launch_the_website()
    })
    it("open",function() {
        var price = [];
        var totalPrice=0;
        //3. Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');
        // 4. Add products to cart
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        // 5. Click 'Cart' button
        cy.get('.shop-menu > .nav > :nth-child(3)').click();
        // 6. Verify that cart page is displayed
        cy.url().should('include', '/view_cart')
        // 7. Click Proceed To Checkout
        cy.get('.col-sm-6 > .btn').click();
        // 8. Click 'Register / Login' button
        cy.get('.modal-body > :nth-child(2) > a > u').click();
        // 9. Fill all details in Signup and create account
        // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        // 11. Verify ' Logged in as username' at top
        cy.Signup();
        // 12.Click 'Cart' button
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        // 13. Click 'Proceed To Checkout' button
        cy.get('.col-sm-6 > .btn').click();
        // 14. Verify Address Details and Review Your Order
        cy.get('#address_delivery > .address_firstname').contains('Mrs. Tanasoaia Ana-Maria');
        cy.get('#address_delivery > :nth-child(3)').contains('-');
        cy.get('#address_delivery > :nth-child(4)').contains('-');
        cy.get('#address_delivery > :nth-child(5)').contains('-');
        cy.get('#address_delivery > .address_country_name').contains('Israel');
        cy.get('#address_delivery > .address_phone').contains('1234567894');
        cy.contains('Review Your Order');
        // 15. Enter description in comment text area and click 'Place Order'
        cy.get('.form-control').type('test');
        cy.get(':nth-child(7) > .btn').click();
        // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        cy.get(':nth-child(2) > .col-sm-12 > .form-control').type('123456781234');
        cy.get(':nth-child(3) > .col-sm-12 > .form-control').type('1234');
        cy.get('.cvc > .form-control').type('12');
        cy.get(':nth-child(2) > .form-control').type('123');
        cy.get(':nth-child(3) > .form-control').type('10');
        // 17. Click 'Pay and Confirm Order' button
        cy.get('#submit').click();
        // 18. Verify success message 'Your order has been placed successfully!'
        //cy.get('#success_message > .alert-success').should('contain.text','Your order has been placed successfully!');
        cy.contains('Order Placed!');
        // 19. Click 'Delete Account' button
        // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    })
})