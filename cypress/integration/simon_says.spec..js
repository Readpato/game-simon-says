/// <reference types="Cypress" />

const URL = "http://192.168.0.134:8080";

context("Simon Says game ", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("Layout", () => {
    it("Test if status bar has loaded correctly", () => {
      cy.get(".status-bar")
        .should("be.visible")
        .should("have.class", "alert-primary");
      cy.get(".status-bar-text").should(
        "have.text",
        "The game hasn't started yet! Press Play!"
      );
    });
  });
});
