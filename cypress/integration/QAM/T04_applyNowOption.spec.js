describe("ApplyNew", function () {
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

  it("applyNew", function () {
    cy.get(".logged-menu").should("be.visible").click();
    cy.get(".dropdown-child").contains("My submission").click();

    //if the current user don't have a submited project click on Apply now, otherwise delete it
    cy.get(".buttons").then(($x) => {
      if ($x.text().includes("Apply Now")) {
        cy.get(".buttons").find(".btn").eq(0).should("have.text", "Apply Now");
        cy.get(".btn").click();
      } else {
        cy.get(".buttons")
          .find(".btn")
          .eq(0)
          .should("have.text", "Delete")
          .click();
        cy.get(".bi").click();
      }
      //verify if the correct fields are displayed for the submit project form
      cy.contains("BEST INNOVATIVE MINDS 2021").should("be.visible");
      cy.contains("Submit Project").should("be.visible");
      cy.get(".submit-name")
        .find(".submit-input-description")
        .eq(0)
        .should("have.text", "Project Name*");
      cy.get(".submit-name")
        .find(".submit-input-description")
        .eq(1)
        .should("have.text", "Team Name*");
      cy.get(".describing-project")
        .find(".submit-input-description")
        .eq(0)
        .should("have.text", "Describe project*");
      cy.get(".team-member")
        .find(".submit-input-description")
        .eq(0)
        .should("have.text", "Team Member Name*");
      cy.get(".button-submit-project")
        .find(".submit-btn")
        .eq(0)
        .should("have.text", "Submit Project");
      cy.get(".drag-zone")
        .find(".add-title")
        .eq(0)
        .should("have.text", "Add files");
    });
  });
});
