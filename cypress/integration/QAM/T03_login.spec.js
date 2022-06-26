describe("Login", function () {
  it("login", function () {
    //inserting the URL
    cy.visit("https://assist-devqa.netlify.app");

    //if text Log is not vizible in page Log out
    cy.get(".header").then(($x) => {
      if (!$x.text().includes("Log In")) {
        cy.get(".logged-menu").should("be.visible").click();
        cy.get(".dropdown-child").contains("Log out").click();
      }
      //Log in to account
      cy.get(".btn-nav").contains("Log In").click({ force: true });
      cy.get(".btn-login").contains("Login with your existing account").click();
      cy.get('input[name="email"]').type("user10@test.com");
      cy.get('input[name="password"]').type("user123456");
      cy.get(".submit-btn").contains("Log In as a member").click();
    });
  });
});
