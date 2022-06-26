describe("ApplyNow", function () {
  before("logIN", function () {
    cy.visit("https://assist-devqa.netlify.app");
    //if text Log is not vizible in page Log out
    cy.get(".header").then(($x) => {
      if (!$x.text().includes("Log In")) {
        cy.get(".logged-menu").should("be.visible").click();
        cy.get(".dropdown-child").contains("Log out").click();
      }
      //Log in to account
      cy.LogIN();
    });
  });
  it("applyNow", function () {
      cy.get(".logged-menu").should("be.visible").click();
      cy.get(".dropdown-child").contains("My submission").click();
  
      //if the current user don't have a submited project click on Apply now, otherwise delete it
      cy.get(".buttons").then(($x) => {
        if ($x.text().includes("Edit")) {
          cy.get(".buttons").find(".btn").eq(1).should("have.text", "Edit").click();
          cy.get('input[name="projectName"]').clear().type("newTestProject");
          cy.get('.submit-btn').click();
          cy.get('.remaining-time-title').should("have.text","newTestProject")
          cy.get('a[href="/bim"]').click();
          cy.get('.jury-navication>:nth-child(2)').contains('Entries').click();
          cy.contains("newTestProject")
          

        } 
      });
    });
});
  