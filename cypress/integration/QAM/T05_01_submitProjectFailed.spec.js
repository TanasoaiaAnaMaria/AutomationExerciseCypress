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
        //empty Project Name
        cy.get('input[name="projectName"]').type("testProject").clear();
        cy.get('.submit-input-description').eq(0).should("have.text","Project name is required*")
        //empty Team Name
        cy.get('input[name="teamName"]').type("testTeamName").clear();
        cy.get('.submit-input-description').eq(1).should("have.text","Team Name is required*")
        //empty Descriptions
        cy.get("textarea").type("testDescriptionProject").clear();
        cy.get('.submit-input-description').eq(2).should("have.text","Describing project is required*")


        
      });
    });
  });