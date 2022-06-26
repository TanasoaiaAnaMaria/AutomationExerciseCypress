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
      //fill the submit project form
      cy.contains("BEST INNOVATIVE MINDS 2021").should("be.visible");
      cy.contains("Submit Project").should("be.visible");
      cy.get('input[name="projectName"]').type("testProject");
      cy.get('input[name="teamName"]').type("testTeamName");
      cy.get("textarea").type("testDescriptionProject");

      cy.get('input[placeholder="Team Member Name"]').type("member 1");
      cy.get(".button-data-team-member").click();
      cy.get('input[placeholder="Team Member Name"]').type("member 2");
      cy.get(".team-member> :nth-child(4)").click();

      cy.get('input[type="file"]').selectFile("cypress/fixtures/test.jpg", {
        force: true,
      });
      cy.get(".status-container").contains("test.jpg");

      cy.get(".submit-btn").click();
      cy.contains("Success!").should("be.visible");
      cy.get(".btn-def").click();
    });
  });
});
